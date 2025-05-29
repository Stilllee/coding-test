const fs = require('fs');
const [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let i = b;
let result = '';

while(i >= a){
    if (i % 2 === 0){
        result += (i + ' ');
    }
    i--;
}

console.log(result.trim());