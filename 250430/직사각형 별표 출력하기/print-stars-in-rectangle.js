const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map((el) => Number(el));
const [n, m] = input;

let result = '';

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < m; j++) {
        if (j === m - 1) {
            line += '* \n'
        } else {
            line += '* ';
        }
    }
    result += line;
}

console.log(result);