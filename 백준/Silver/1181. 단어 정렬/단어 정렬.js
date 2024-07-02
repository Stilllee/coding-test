const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const  strArr = [];

for (let i = 1; i < input.length; i++) {
    strArr.push(input[i]);
}

const sortedArr = strArr.sort();
sortedArr.sort((a, b) => a.length - b.length);

const uniqueArr = [...new Set(sortedArr)]

console.log(uniqueArr.join('\n'));