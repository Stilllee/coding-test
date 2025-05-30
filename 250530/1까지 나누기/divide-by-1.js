const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i; i++) {
    n = Math.floor(n / i);

    if (n <= 1) {
        console.log(i);
        break;
    }
}