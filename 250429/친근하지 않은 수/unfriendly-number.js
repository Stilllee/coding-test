const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let count = 0;

for (let i = 1 ; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
        count++;
    }
}

console.log(n - count);