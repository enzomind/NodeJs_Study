setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve ().then(() => console.log('promise'));

const obj = {
    bc: 'hello',
    '2ca': 'hello1',
    'c a': 'hello2',
    'c-a': 'hello3',
};

console.log(obj.bd);
console.log(obj['bc']);
// console.log(obj.2bc);
console.log(obj['2']);
console.log(obj['c a']);