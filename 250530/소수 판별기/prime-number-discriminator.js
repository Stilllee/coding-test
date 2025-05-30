const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let satisfied = true;
let i = 2;

while (i < n) {
    if (n % i === 0) {
        satisfied = false;
        break;
    }
    i++;
}

console.log(satisfied ? 'P' : 'C');