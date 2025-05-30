const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    if (sum >= n) {
        console.log(i);
        break;
    }
}