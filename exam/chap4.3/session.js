const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session = {};

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();

        // 쿠키에 이름을 담아 보내는 대신 uniqueInt라는 숫자값을 내보내 uniqueInt 속성 아래에 있는 세션 객체에 대신 저장
        //가장 안전하지만 서버가 멈추거나 재시작되면 메모리에 저장된 변수가 초기화되서 실제 배포용 서버에서는 저렇게 하지않음.
        //그래서 레디스(Redis)나 멤캐시드(Memcached)와 같은 디비에 넣어둠.
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()};
            HttpOnly; Path=/`,
        });
        res.end();
        //세션 쿠키가 존재하고 만료 기간이 지나지않았다면
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
    .listen(8080, () => {
        console.log('8080');
    });