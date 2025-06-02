const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += '* ';
    }
    console.log(str.trim());
}