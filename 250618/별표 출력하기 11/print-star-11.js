const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for (let i = 0; i < (2 ** n) - 1; i++) {
    str = '';
    for (let j = 0; j < (2 ** n) - 1; j++) {
        if ((i % 2 === 1) && (j % 2 === 1)) {
            str += '  ';
        } else {
            str += '* ';
        }
    }
    console.log(str);
}