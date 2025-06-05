const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

let str = '';

for (let i = 1; i <= n; i++) {
    str = '';
    for (let j = n; j > 2 * n - 1; j--) {
        str += '* ';
    }
    for (let j = 0; j < i - 1; j++) {
        str += '  ';
    }
    console.log(str);
}