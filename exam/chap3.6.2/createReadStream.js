const fs = require('fs');

//createReadStream 으로 읽기 스트림 만들기
//첫번째 인수로 읽을 파일 경로 넣어주고 두번째 인수는 옵션 객체
//highWaterMark 란 옵션이 크기를 정할 수 있음. 16바이트로 설정 default : 64KB
const readStream = fs.createReadStream('./readme.txt',{highWaterMark: 16});
const data = []; 

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error :', err);
});