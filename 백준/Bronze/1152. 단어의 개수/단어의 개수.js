const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const result = input.filter(word => word !== '');

console.log(result.length);