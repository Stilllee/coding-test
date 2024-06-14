const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const n = input[0];

const result = [];

for (let i = 1; i <= n; i++) {
    result.push(input[i]);
}

result.sort((a, b) => a - b);

console.log(result.join('\n'));