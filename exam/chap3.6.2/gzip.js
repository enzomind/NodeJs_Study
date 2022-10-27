const zlib = require('zlib');

const fs = require('fs');


const readStream = fs.createReadStream('./readme2.txt');
//파일을 압축하는 zlib 모듈
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme2.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
