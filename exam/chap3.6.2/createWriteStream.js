const fs = require('fs');

//스트림만들어주고 두번째 인수는 사용 안함
const writeStream = fs.createWriteStream('./writeme2.txt');
//finish 이벤트 리스너로 파일 쓰기 종료 시, 콜백 함수
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한번 더 써주고!!');
writeStream.end();
