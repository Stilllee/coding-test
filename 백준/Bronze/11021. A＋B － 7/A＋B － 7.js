const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const t = parseInt(input[0]);

let result = '';

for (let i = 1; i <= t; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const sum = a + b;

    result += `Case #${i}: ${sum} \n`;
}

console.log(result);