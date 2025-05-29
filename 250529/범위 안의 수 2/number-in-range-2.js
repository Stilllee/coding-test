const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;
let cnt = 0;

for (let i = 0; i <= input.length; i++) {
    if (input[i] <= 200 && input[i] > 0) {
        sum += input[i];
        cnt++;
    }
}

const avr = (sum / cnt).toFixed(1);

console.log(sum, avr);