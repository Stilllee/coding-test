const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let satisfied = false;
let i = a;

while (i <= b) {
    if (i % c === 0) {
        satisfied = true;
        break;
    }
    i++;
}

console.log(satisfied ? 'YES' : 'NO');