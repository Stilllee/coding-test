const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for (let i = 1; i <= n; i++) {
    str = '';
    if (i % 2 === 0) {
        for (let j = 1; j <= i; j++) {
            str += '* ';
        }
    } else {
        str += '*';
    }
    console.log(str);
}