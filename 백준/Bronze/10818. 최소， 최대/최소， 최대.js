const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);

const array = input[1].split(' ').map(Number);

console.log(Math.min(...array), Math.max(...array));