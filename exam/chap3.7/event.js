const EventEmitter = require('events');
const myEvent = new EventEmitter();

//on과 기능 동일
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});

//on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백 연결 (이벤트 리스닝)
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event2', () => {
    console.log('이벤트 3');
}); // 한번만 실행


//이벤트 호출 메서드
myEvent.emit('event1'); //이벤트 호출
myEvent.emit('event2'); //이벤트 호출

myEvent.emit('event3'); //이벤트 호출
myEvent.emit('event3'); //이벤트 호출

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); //실행 안됨

const listener = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); //실행 안됨

console.log(myEvent.listenerCount('event2'));
