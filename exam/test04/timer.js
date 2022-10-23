const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000)


const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행안됨');
});

clearImmediate(immediate2);

//와 이거 개헷갈림.. 일단 setTimeout(콜백, 0) <- 앵간하면 사용 ㄴㄴ
//immediate2 는 clearImmediate 때문에 취소한거까진 OK
//1초 뒤에 interval -> 1.5초뒤에 timeout, 2초에 interval
//2.5초때 클리어. 아니 setImmediate <- 쓰기도힘들고 자동완성이안돼!!!