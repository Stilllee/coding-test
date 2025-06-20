const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for (let i = n; i >= 1; i--) {
    str = '';
    for (let j = n; j >= 1; j--) {
        str += `(${i},${j}) `;
    }
    console.log(str);
}