const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let mulipleOfThree = 0;
let mulipleOfFive = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
        mulipleOfThree++;
    }

    if (input[i] % 5 === 0) {
        mulipleOfFive++;
    }
}

console.log(mulipleOfThree, mulipleOfFive);