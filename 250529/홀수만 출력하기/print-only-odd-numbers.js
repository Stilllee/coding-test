const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for (const num of input) {
    if (num % 2 !== 0 && num % 3 === 0) {
        console.log(num);
    }
}