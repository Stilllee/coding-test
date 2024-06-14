const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const max = Math.max(...input);
const index = input.indexOf(max) + 1;

console.log(max);
console.log(index);