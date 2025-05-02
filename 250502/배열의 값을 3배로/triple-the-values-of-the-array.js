const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr = [];

for (const line of input) {
    arr.push(line.split(' ').map((el) => Number(el) * 3));
}

for (let i = 0; i < 3; i++) {
    let str = '';
    for (let j = 0; j < 3; j++) {
        str += arr[i][j] + ' ';
    }
    console.log(str);
}
