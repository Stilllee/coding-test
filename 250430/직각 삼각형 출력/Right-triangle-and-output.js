const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = 1; i <= n; i++) {
    result += '*'.repeat(2 * i - 1) + '\n';
}

console.log(result.trim());