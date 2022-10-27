const fs = require('fs').promises;

//fs.readdir(경로, 콜백) 
//폴더 안의 내용물 확인
fs.readdir('./folder')
.then((dir)=>{
    console.log('폴더 내용 확인',dir);
    //fs.unlink(경로, 콜백)
    //파일 지우기 가능, 파일이 없다면 에러 발생하므로 있는지 꼭 확인 필요
    return fs.unlink('./folder/newfile.js');
})
.then(()=>{
    console.log('파일 삭제 성공');
    //fs.rmdir(경로, 콜백)
    //폴더 지울 수 있음. 폴더 안에 파일들이 있으면 에러 발생하므로 내부 파일 먼저 지우고 호출 필요
    return fs.fs.rmdir('./folder');
})
.then(()=>{
    console.log('폴더 삭제 성공');
})
.catch((err) => {
    console.error(err);
});