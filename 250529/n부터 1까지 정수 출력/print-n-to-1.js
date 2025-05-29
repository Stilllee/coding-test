const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let i = n;
let result = '';

while(i >= 1){
    result += (i + ' ');
    i--;
}

console.log(result.trim());