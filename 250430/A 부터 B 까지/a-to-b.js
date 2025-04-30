const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map((el) => Number(el));
const [a, b] = input;
let i = a;
let result = [];

while (i <= b) {
    result.push(i);
    if (i % 2 === 0) {
        i += 3;
    } else {
        i *= 2;
    }
}

console.log(result.join(' '));