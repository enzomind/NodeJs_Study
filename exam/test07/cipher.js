//오우쉣 무슨 벌써 암호화;
//노드로 양방향 하는 방법(코드 이해하기 위해 암호학을 추가로 공부하라는데?!!)

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456'; //32비트
const iv = '1234567890123456'; //16바이트

//추후 AES 암호화에 대해 따로 공부
//사용 가능한 알고리즘 목록은 crypto.getCiphers()를 호출해서 확인 가능

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
//출력 인코딩
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);