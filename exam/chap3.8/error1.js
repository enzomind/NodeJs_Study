setInterval(() => {
    console.log('시작');
    try {
        throw new error('Broken Server');
    }catch(err){
        console.error(err)
    }
}, 1000);