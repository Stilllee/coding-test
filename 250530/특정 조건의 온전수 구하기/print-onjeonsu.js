const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = 1; i <= n; i++) {
    const str = i.toString();
    const lastDigit = str[str.length - 1];

    if (i % 2 === 0 || lastDigit === '5' || (i % 3 === 0 && i % 9 !== 0)) {
        continue;
    }
    result += (i + ' ');
}

console.log(result.trim());