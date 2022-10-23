import {odd, even} from './var';

function  checkOddOrOen(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

export default checkOddOrOen();

//ES2015 모듈 Style
//require -> module로
//exports -> import, export default로 변경

