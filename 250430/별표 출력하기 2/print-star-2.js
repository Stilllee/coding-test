const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = 0; i < n; i++) {
    result = '';
    for (let j = 0; j < n - i; j++) {
        result += '* ';
    }
    console.log(result);
}