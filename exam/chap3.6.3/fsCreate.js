const fs = require('fs').promises;
const constants = require('fs').constants;

//4가지 비동기 메서드(한 메서드의 콜백에서 다른 메서드 호출)

//fs.access(경로, 옵션, 콜백) : 폴더나 파일에 접근할 수 있는지 체크
//F_OK 파일 존재 여부 / R_OK 읽기 권한 여부 / W_OK 쓰기 권한 여부 체크
fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
.then(()=>{
    return Promise.reject('이미 폴더 있음');
})
.catch((err)=> {
    if(err.code === 'ENOENT'){
        console.log('폴더 없음');
        //fs.mkdir(경로, 콜백)
        //폴더 만드는 메서드로써 access 메서드로 확인하지않으면 에러뱉어냄
        return fs.mkdir('./folder');
    }
    return Promise.reject(err);
})
.then(()=>{
    console.log('폴더 만들기 성공');
    //fs.open(경로, 옵션, 콜백)
    //파일의 아이디 (fd 변수)를 가져오는 메서드
    //fs.read 또는 fs.write로 읽거나 쓸 수 있음
    //두번째 인수로 쓰려면 w, 읽으려면 r, 기존 파일 업데이트는 a
    return fs.open('./folder/file.js', 'w');
})
.then((fd) => {
    console.log('빈 파일 만들기 성공', fd);
    //fs.rename(기존 경로, 새 경로, 콜백)
    //파일의 이름을 바꾸는 메서드로 기존 파일 위치와 신규 파일 위치를 적으면됨.
    return fs.rename('./folder/file.js', './folder/newfile.js');
})
.then(()=>{
    console.log('이름 바꾸기 성공');
})
.catch((err)=> {
    console.error(err);
});