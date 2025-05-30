const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let satisfied = true;
let i = 0;

while (i <= 4) {
    let num = input[i];
    if (num % 3 !== 0) {
        satisfied = false;
        break;
    }
    i++;
}

console.log(satisfied ? 1 : 0);