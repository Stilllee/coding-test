const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [a, b, c] = input;

console.log(parseInt(a) + parseInt(b) - parseInt(c));
console.log(a + b - c);