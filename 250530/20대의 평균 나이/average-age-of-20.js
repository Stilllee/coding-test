const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let avr = 0;
let cnt = 0;
let idx = 0;

while (true) {
    const n = input[idx];
    idx++;

    if (!(n >= 20 && n <= 29)) {
        break;
    }

    avr += n;
    cnt++;
}

console.log((avr / cnt).toFixed(2));