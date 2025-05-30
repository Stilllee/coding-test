const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;
let cnt = 0;

while (true) {
    let n = input[idx];

    if (cnt > 3) {
        break;
    }

    if (n % 2 === 0) {
        console.log(Math.floor(n / 2));
    }

    idx++;
    cnt++;
}