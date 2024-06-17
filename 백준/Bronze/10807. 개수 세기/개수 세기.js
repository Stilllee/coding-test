const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, _, v] = input;
const numbers = input[1].split(' ').map(Number);

const result = numbers.filter(item => item == v);

console.log(result.length);