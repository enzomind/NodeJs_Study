const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./writeme.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./writeme.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./writeme.txt');
console.log('3번',data.toString());

//치명적인 단점이 요청이 수백개 들어오는 상황에선 성능에 문제가 발생함.
//sync메서드를 사용할땐 이전 작업이 완료되어야 다음 작업을 진행할 수 있기 때문.

