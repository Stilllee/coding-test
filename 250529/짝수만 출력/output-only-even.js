const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';
let i = a;

while(i <= b){
    if (i % 2 === 0) {
        result += (i + ' ');
    }
    i++;
}

console.log(result.trim());