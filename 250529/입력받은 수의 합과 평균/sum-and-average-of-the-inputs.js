const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

for (let i = 1; i < input.length; i++) {
    sum += input[i];
}

const avr = (sum / (input.length - 1)).toFixed(1);

console.log(sum, avr);