const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d = [];
let total = 0;

for(line of input) {
    arr2d.push(line.split(' ').map(Number));
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < i + 1; j++) {
        total += arr2d[i][j];
    }
}

console.log(total);