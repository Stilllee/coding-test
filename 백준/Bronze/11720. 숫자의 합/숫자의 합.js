const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = input[0];

const numArr = input[1].split('').map(Number);

const result = numArr.reduce((acc, cur) => acc + cur);

console.log(result);
