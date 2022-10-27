//readFile 메서드 사용 시 읽었던 파일이 버퍼 형식으로 출력되었었음.
//노드는 파일 읽을 때 메모리에 파일 크기만큼 공간 마련해두고 파일 데이터를
//메모리에 저장한 뒤 사용자가 조작할 수 있게하는데 이때, 메모리에 저장된 데이터가 버퍼

//from(문자열) : 문자열을 버퍼로 바꿀 수 있음.
const buffer = Buffer.from('날 버퍼로 어디한번 바꿔봐!!');
console.log('from():', buffer);
console.log('length', buffer.length);
//버퍼를 다시 문자열로 바꿀 수 있음. base64 또는 hex를 인수로 넣으면 인코딩 가능
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄어쓰기')];
//배열안에 든 버퍼들을 하나로 합침.
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

//빈 버퍼 생성 후, 바이트를 넣으면 해당 크기의 버퍼가 생성됨.
const buffer3 = Buffer.alloc(5);
console.log('alloc():',buffer3);

