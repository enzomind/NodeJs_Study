const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '노드로 쓴 글')
.then(()=> {
    return fs.readFile('./writeme.txt');
})
.then((data) => {
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
})