const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const s = input[0];
const i = parseInt(input[1]);

console.log(s[i - 1]);