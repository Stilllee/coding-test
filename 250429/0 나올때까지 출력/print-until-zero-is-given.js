const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map((el) => Number(el));

for (const num of input) {
    if (num === 0) {
        break;
    }
    console.log(num);
}