const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(' ').map(Number);

let arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
let arr2 = Array(n).fill(0).map(() => Array(m).fill(0));
let result = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 1; i < 9; i++) {
    if (i <= n) {
        arr1[i - 1] = input[i].split(' ').map(Number);
    } else if (i > n) {
        arr2[i - n - 1] = input[i].split(' ').map(Number);
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            result[i][j] = 0;
        } else {
            result[i][j] = 1;
        }
    }
}

for (const line of result) {
    console.log(line.join(' '));
}
