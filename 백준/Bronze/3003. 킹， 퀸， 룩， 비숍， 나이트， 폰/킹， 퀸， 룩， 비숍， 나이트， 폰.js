const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const set = [1, 1, 2, 2, 2, 8];
const result = Array(6).fill(0);

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < set.length; j++) {
        if(input[i] !== set[i]) {
            result[i] = set[i] - input[i];
        }
    }
}

console.log(result.join(' '));