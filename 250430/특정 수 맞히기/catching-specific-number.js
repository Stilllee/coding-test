const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map((el) => Number(el));

for (const num of input) {
    if (num > 25) {
        console.log('Lower');
    } else if (num < 25) {
        console.log('Higher');
    } else {
        console.log('Good');
        break;
    }
}