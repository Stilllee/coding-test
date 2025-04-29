const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let result = 0;

for (let i = 1; i <= 100; i++) {
    result += i;
    if (result >= n) {
        console.log(i);
        break;
    }
}