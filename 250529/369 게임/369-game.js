const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim().split(' '));

let result = '';
let i = 1;

function isIncludesThree(num) {
    strNum = num.toString();
    if (strNum.includes('3') || strNum.includes('6') || strNum.includes('9')) {
        return true;
    } else {
        return false;
    }
}

while (i <= n) {
    if (i % 3 === 0 || isIncludesThree(i)) {
        result += 0;
    } else {
        result += i;
    }
    result += ' ';
    i++;
}

console.log(result.trim());