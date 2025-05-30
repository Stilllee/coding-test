const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n;
let idx = 0;

while (true) {
    n = input[idx];

    if (n > 25) {
        console.log('Lower');
    } else if (n < 25) {
        console.log('Higher');
    } else {
        console.log('Good');
        break;
    }

    idx++;
}