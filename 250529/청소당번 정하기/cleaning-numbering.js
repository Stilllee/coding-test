const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cleaning = [0, 0, 0];

for (let i = 2; i <= n; i++) {
    if (i % 2 === 0 && i % 3 !== 0 && i % 12 !== 0) {
        cleaning[0]++;
    }
    if (i % 3 === 0 && i % 12 !== 0) {
        cleaning[1]++;
    }
        if (i % 12 === 0) {
        cleaning[2]++;
    }
}

console.log(cleaning.join(' '));