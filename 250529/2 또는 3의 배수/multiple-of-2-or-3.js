const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim().split(' '));

let result = '';

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0){
        result += 1;
    } else {
        result +=  0;
    }
    result += ' ';
}

console.log(result.trim());