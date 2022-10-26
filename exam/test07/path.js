const path = require('path');

const string = __filename;

console.log('path.sep:',path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('------------------------------');
console.log('path.dirname():',path.dirname(string));
console.log('path.extname():',path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('------------------------------');
console.log('path.parse()',path.parse(string));
console.log('path.format():',path.format({
    dir: '/Users/savvy',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():',path.normalize('/Users//savvy/path.js'));
//경로 구분'/'을 여러번 사용했거나 혼용 시 정상 경로로 변환
console.log('------------------------------');
console.log('path.isAbsolute(/Users//):',path.isAbsolute('/Users/'));
//파일 경로가 절대 경로인지 상대경로인지를 true/false로 알려줌
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('-----------------------------',);
console.log('path.relative():', path.relative('/Users/savvy/path.js', '/Users//'));
console.log('path.join():',path.join(__dirname, '..', '..', '/Users', '.', '/savvy'));
//여러 인수를 넣으면 하나의 경로로 합침. 이때, 상대 경로인 ..(부모 디렉터리)와 .(현위치)도 알아서 처리
console.log('path.resolve():',path.resolve(__dirname,'..', '/Users', '.', '/savvy'));
//join과 비슷하지만 동작 방식이 다름.

//하나도 모르겠는데 노드에서 자주 쓴다고 함.

