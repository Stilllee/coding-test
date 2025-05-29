const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let cnt = 0;
let sum = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 ===0) {
        sum += i;
        cnt++;
    }
}

const avr = (sum / cnt).toFixed(1);

console.log(sum, avr);