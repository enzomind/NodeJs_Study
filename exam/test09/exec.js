const exec = require('child_process').exec;

// const process = exec('dir');
const process = exec('ls');

process.stdout.on('data', function(data){
    console.log(data.toString());
});

process.stderr.on('data', function(data){
    console.error(data.toString());
});

//exec : 셸을 실행해 명령어를 수행
//spawn : 새로운 프로세스를 띄우며 명령어를 실행
