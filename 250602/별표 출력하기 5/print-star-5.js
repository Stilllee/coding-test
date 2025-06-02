const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = n; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        for (k = 1; k <= i; k++) {
            str += '*';
        }
        str += ' ';
    }
    console.log(str);
}