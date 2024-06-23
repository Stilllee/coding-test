const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const baskets = Array(n).fill(0);

for (let i = 1; i <= m; i++) {
    const [start, end, k] = input[i].split(' ').map(Number);
    for (let j = start - 1; j < end; j++) {
        baskets[j] = k;
    }
}

console.log(baskets.join(' '));