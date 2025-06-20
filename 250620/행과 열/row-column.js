const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';

for (let i = 1; i <= a; i++) {
    str = '';
    for (let j = 1; j <= b; j++) {
        str += `${i * j} `;
    }
    console.log(str);
}