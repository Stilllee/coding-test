const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    let total = 0;

    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) {
            total += j;
        }
    }
    console.log(total);
}

