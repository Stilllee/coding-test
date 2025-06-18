const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for (let i = 1; i <= n * 2; i++) {
    str = '';
    if (i % 2 === 0){
        for (let j = 1; j <= i / 2; j++) {
            str += '* ';
        }
    } else {
        for (let j = 1; j <= n - (i / 2 - 1); j++) {
            str += '* ';
        }
    }
    console.log(str);
}