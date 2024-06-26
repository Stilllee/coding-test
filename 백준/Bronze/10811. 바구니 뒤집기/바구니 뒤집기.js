const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let line = [];

for (let idx = 1; idx <= m; idx++) {
    line.push(input[idx].split(' ').map(Number));
}

let baskets = [];
for (let idx = 1; idx <= n; idx++) {
    baskets[idx - 1] = idx;
}

function sortBaskets (arr, start, end){
    start--;
    end--;
    const reversedPart = arr.splice(start, end - start + 1).reverse();
    arr.splice(start, 0, ...reversedPart);
}

for (const [i, j] of line) {
    sortBaskets(baskets, i, j);
}

console.log(baskets.join(' '));