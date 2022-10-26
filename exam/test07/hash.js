//다양한 방식의 암호화를 도와주는 모듈

const crypto = require('crypto');

//createHash(알고리즘)
//사용할 해시 알고리즘을 넣는데 md5, sha1 등등 쓸수있음. 그치만 취약점 발견 이슈로 sha512 쓰는게 충분한데 나중에 강화알고리즘으로 바꿔야 함.

//update(문자열)
//변환할 문자열을 넣고

//digest(인코딩)
//인코딩할 알고리즘을 넣음. base64가 문자열이 가장 짧아 애용됨.
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));