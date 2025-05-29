const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const c = input[0];
const n = Number(input[1]);

let result = '';

if (c === 'A') {
    for (let i = 1; i <= n; i++) {
        result += (i + ' ');
    }
} else if (c === 'D') {
    for (let i = n; i >= 1; i--) {
        result += (i + ' ');
    }
}

console.log(result.trim());