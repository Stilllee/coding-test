const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while (true) {
    let n = input[idx];

    if (n === 1) {
        console.log('John');
    } else if (n === 2) {
        console.log('Tom');
    } else if (n === 3) {
        console.log('Paul');
    } else if (n === 4) {
        console.log('Sam');
    } else {
        console.log('Vacancy');
        break;
    }

    idx++;
}