const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = n;

for (let i = 1; i <= n; i++) {
    result /= i;
    if (result <= 1) {
        console.log(i);
        break;
    }
}