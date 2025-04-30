const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const [start, end] = input;

let result = [];

for (let i = start; i <= end; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
        if(i % j === 0) {
            count++;
        }
    }

    if(count === 3) {
        result.push(i);
    }
}

console.log(result.length)