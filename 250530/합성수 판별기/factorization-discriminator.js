const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let satisfied = false;
let i = 2;

while (i <= (n - 1)) {
    if (n % i === 0) {
        satisfied = true;
        break;
    }
    i++;
}

console.log(satisfied ? 'C' : 'N');