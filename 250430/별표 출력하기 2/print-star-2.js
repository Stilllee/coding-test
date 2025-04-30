const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        result += '* ';
    }
    result += '\n';
}

console.log(result.trim());