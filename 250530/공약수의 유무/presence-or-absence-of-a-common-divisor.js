const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let satisfied = false;
let i = a;

while (i <= b) {
    if (1920 % i === 0 && 2880 % i === 0) {
        satisfied = true;
        break;
    }
    i++;
}

console.log(satisfied ? 1 : 0);