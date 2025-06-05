const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = n - i; j >= 1; j--) {
        str += '  ';
    }

    for (let j = 1; j <= 2 * i - 1; j ++) {
        str += '* '
    }
    console.log(str);
}