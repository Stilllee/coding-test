const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';

while (a <= b) {
    result += a + ' ';
    
    if (a % 2 === 0) {
        a += 3;
    } else {
        a *= 2;
    }
}

console.log(result.trim());