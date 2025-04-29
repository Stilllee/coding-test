const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const strArr = ['apple', 'banana', 'grape', 'blueberry', 'orange'];
let result = [];
let count = 0;

for (const str of strArr) {
    if (str[2] === input || str[3] === input) {
        result.push(str);
        count++;
    }
}

result.push(count);

console.log(result.join('\n'));