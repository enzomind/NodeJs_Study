//fs 모듈 : 파일 시스템에 접근하는 모듈

const fs = require('fs');
//require를 통해 외부에서 module을 사용할 수 있음


fs.readFile('./writeme.txt', (err,data) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});