const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

let result = '';

for (let i = 1; i <= n; i++) {
    result += i + '\n';
}

console.log(result);