const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let sum = 0;

for (i = 0; i < n; i++) {
    if (n % i === 0) {
        sum += i;
    }
}

console.log(sum === n ? 'P' : 'N');