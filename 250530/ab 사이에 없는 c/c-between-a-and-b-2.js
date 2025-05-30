const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let satisfied = true;
let i = a;

while (i <= b) {
    if (i % c === 0) {
        satisfied = false;
        break;
    }
    i++;
}

console.log(satisfied ? 'YES' : 'NO');