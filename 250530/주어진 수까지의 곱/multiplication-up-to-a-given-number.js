const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = 1;

for (let i = a; i <= b; i++) {
    result *= i;
}

console.log(result);