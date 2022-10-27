const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data){
    console.error(data.toString());
});

//exec : 셸을 실행해 명령어를 수행
//spawn : 새로운 프로세스를 띄우며 명령어를 실행
//단, spawn {shell: true} 주면 셸을 실행해서 명령어를 수행