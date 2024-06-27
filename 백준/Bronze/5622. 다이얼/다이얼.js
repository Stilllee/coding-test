const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('');

const dial = [' ', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

let result = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < dial.length; j++) {
        if (dial[j].includes(input[i])) {
            result += j + 2;
        }
    }
}

console.log(result);