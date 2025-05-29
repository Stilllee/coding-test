const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';

if (a >= b) {
    for (let i = a; i >= b; i--) {
        result += (i + ' ');
    }
} else {
    for (let i = b; i >= a; i--) {
        result += (i + ' ');
    }
}

console.log(result.trim());