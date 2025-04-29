const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map((el) => Number(el));
const [a, b] = input;
let total = 0;

for (let i = a; i <= b; i++ ) {
    if (i % 2 === 0) {
        total += i;
    }
}

console.log(total);