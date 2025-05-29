const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let sum = 0;

for (let i = n; i <= 100; i++) {
    sum += i;
}

console.log(sum);