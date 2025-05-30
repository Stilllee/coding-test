const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

while (true) {
    n /= 2;
    cnt++;

    if (n === 1) {
        break;
    }
}

console.log(cnt);