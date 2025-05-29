const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

for (let i = 1; i <= input.length; i++) {
    if (input[i] % 3 === 0 && input[i] % 2 === 1){
        sum += input[i];
    }
}

console.log(sum);