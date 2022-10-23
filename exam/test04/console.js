const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
console.log('로그 찍는건 이미 마스터했는데?? -,.-')
console.log(string, number, boolean);
console.error('에러 메시지는 여따 담을 수 있음');

console.table([{name: '제로', birth: 1994}, {name: 'hero', birth: 1988}]);
//뭐야이거 흥미돋?!

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('시간 측정');
for(let i = 0; i<100000; i++) {}
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}

a();

//왜 이따구로 쓰나했더니 논블로킹떄문에 그런듯.

console.timeEnd('전체 시간');
//처리속도 확인 시 유용할듯

