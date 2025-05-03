const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (let line of input) {
    let total = 0;
    line = line.split(' ').map(Number);
    for (let el of line) {
        total += el;
    }
    console.log(total);
}