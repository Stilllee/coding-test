const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n;
let idx = 0;

while (true) {
    n = input[idx];

    if (n === 0) {
        break;
    }
    
    console.log(n);
    idx++;
}