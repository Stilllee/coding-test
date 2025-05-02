const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (const line of input) {
    const result = line.split(' ').map((el) => Number(el) * 3);
    console.log(result.join(' '));
}