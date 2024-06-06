const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim(), 10);

function sum(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
    }
    return count;
}

console.log(sum(n));