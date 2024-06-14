const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const t = parseInt(input[0]);

let result = '';

for (let i = 1; i <= t; i++) {
    const line = input[i].split('');
    let score = 0;
    let count = 0;

    for (let j = 0; j < line.length; j++) {
        if (line[j] === 'O') {
            count++;
            score += count;
        } else {
            count = 0;
        }
    }
    result += score + '\n';
}

console.log(result);