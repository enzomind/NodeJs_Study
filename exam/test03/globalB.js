const A = require('./globalA');

global.message='이 값이 다른 쪽(globalA)에서도 접근이 된다?!';
console.log(A());