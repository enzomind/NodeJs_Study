const fs = require('fs');

console.log('시작');
fs.readFile('./writeme.txt',(err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./writeme.txt',(err, data) => {
        if(err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./writeme.txt',(err, data) => {
            if(err) {
                throw err;
            }
            console.log('3번', data.toString());
        });
    });
});
//이렇게 하면 비동기임에도 순서대로 나오긴하지만 일명 콜백 지옥이 펼쳐짐.
//Promise나 async/await으로 어느정도 해결이 가능.
