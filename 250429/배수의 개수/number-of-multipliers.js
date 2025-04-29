const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map((el) => Number(el));
let multipleOfThree = 0;
let multipleOfFive = 0;

for (const num of input) {
    if (num % 3 === 0) {
        multipleOfThree++;
    }
    if (num % 5 === 0) {
        multipleOfFive++;
    }
}

console.log(multipleOfThree, multipleOfFive);