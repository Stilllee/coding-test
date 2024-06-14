const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [a, b, c] = input;

let result = 0;

if (a === b && b === c) {
    result = 10000 + (a * 1000);
} else if (a === b || a === c) {
    result = 1000 + (a * 100);
} else if (b === c) {
    result = 1000 + (b * 100);
} else if (a != b && a != c) {
    const max = Math.max(a, b, c);
    result = max * 100;
}

console.log(result);