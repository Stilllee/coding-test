const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const [a, b] = input;

function reverse(num) {
    const reverseNum = num.split('').reverse().join('');
    return parseInt(reverseNum, 10);
}

const reversedA = reverse(a);
const reversedB = reverse(b);

const max = Math.max(reversedA, reversedB);

console.log(max);