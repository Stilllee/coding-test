const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;
}

console.log(sum);