const fs = require('fs');

fs.watch('./writeme4.txt', (EventType, filename)=>{
    console.log(EventType, filename);
});