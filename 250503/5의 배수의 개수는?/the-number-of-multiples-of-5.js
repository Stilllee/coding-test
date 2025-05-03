const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let count = 0;

for (let i = 0; i < 4; i++) {
    const line = input[i].split(' ').map(Number);
    for (let j = 0; j < 4; j++) {
            if (line[j] % 5 === 0) {
            count++;
        }
    }
}

console.log(count);