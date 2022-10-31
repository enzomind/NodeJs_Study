const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if(req.method === 'GET') {
            if (req.url === '/') { //컨트롤러 역할 하는거 같구만..!!!
                const data = await fs.readFile('./exam/chap4.2/restFront.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if(req.url === '/about') {
                const data = await fs.readFile('./exam/chap4.2/about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if(req.url ==='/users') {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            //주소가 /도 /about도 /users도 아니면
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                console.log("404");
                //주소가 없으니 404에러 발생
            }
        } else if(req.method === 'POST') {
            console.log("요청");

            if(req.url === '/user') {
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });


                //요청 body를 다 받은 후에 실행됨
                return req.on('end', () => {
                    console.log('POST 본문(body):', body);
                    const {name} = JSON.parse(body);
                    const id = Date.now();
                    users[id]=name;
                    res.writeHead(201);
                    res.end('등록 성공');
                });
            }
        } else if(req.method === 'PUT') {
            if(req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(body):', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }
        }else if(req.method === 'DELETE') {
            if(req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }

        res.writeHead(404);
        return res.end('Not Found');
    } catch(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8080, () => {
        console.log('8080 대기')
    })
