const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let result = '';

for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result += `${a + b} \n`;
}

console.log(result);