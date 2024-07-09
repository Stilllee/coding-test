const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

let count = 0;

for (let i = 0; i < n; i++) {
    let num = numbers[i];
    if (num === 1) {
        continue;
    }
    let isPrime = true;
    for (let j = 2; j < num; j++) {
        if(num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        count++;
    }
}

console.log(count);