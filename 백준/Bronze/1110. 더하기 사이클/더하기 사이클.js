const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = parseInt(input);
let count = 0;
let original = n;

do {
    let sum = Math.floor(n / 10) + (n % 10);
    n = (n % 10) * 10 + (sum % 10);
    count++;
} while (n !== original);

console.log(count);
