const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number).sort((a, b) => a - b);

let sum = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);