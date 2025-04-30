const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = 1; i <= n; i++) {
    result = '';
    for (let j = 1; j <= i; j++) {
        result = `${j} `.repeat(j);
    }
    console.log(result);
}