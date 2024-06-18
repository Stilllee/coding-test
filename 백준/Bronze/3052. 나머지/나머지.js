const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const restArr = input.map((num) => num % 42);

let result = [];
let num;

for (let i = 0; i < restArr.length; i++) {
    if (!result.includes(restArr[i])) {
        result.push(restArr[i]);
    } 
}

console.log(result.length);