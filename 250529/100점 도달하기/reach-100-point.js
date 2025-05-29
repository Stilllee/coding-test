const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim().split(' '));

let result = '';

for (let i = n; i <= 100; i++) {
    if (i >= 90){
        result += 'A';
    } else if (i < 90 && i >= 80) {
        result +=  'B';
    } else if (i < 80 && i >= 70) {
        result +=  'C';
    } else if (i < 70 && i >= 60) {
        result +=  'D';
    } else if (i < 60) {
        result +=  'F';
    }
    result += ' ';
}

console.log(result.trim());