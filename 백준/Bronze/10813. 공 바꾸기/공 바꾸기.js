const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const line = [];
const baskets = [];
let temp = 0;

for (let idx = 1; idx <= m; idx++) {
    line.push(input[idx].split(' ').map(Number));
}

for (let idx = 0; idx < n; idx++) {
    baskets[idx] = idx + 1;
}

for (let idx = 0; idx < m; idx++) {
    const [i, j] = line[idx];
    temp = baskets[i - 1];
    baskets[i - 1] = baskets[j - 1];
    baskets[j - 1] = temp;
}

console.log(baskets.join(' '));