const fs = require('fs');
const a = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = 1; i <= a; i++) {
    const cond1 = i % 2 === 0 && i % 4 !== 0;
    const cond2 = Math.floor(i / 8) % 2 === 0;
    const cond3 = (i % 7) < 4;

    if (cond1|| cond2 || cond3) {
        continue;
    }
    result += (i + ' ');
}

console.log(result.trim());