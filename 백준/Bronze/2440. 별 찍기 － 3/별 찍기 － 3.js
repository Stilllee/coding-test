const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
let result = '';
for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);