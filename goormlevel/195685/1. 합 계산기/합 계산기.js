const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const t = parseInt(input[0]);
    const result = [];

    for (let i = 1; i <= t; i++) {
        const [a, b, c] = input[i].split(' ');

        result.push(calculator(a, b, c));
    }

    console.log(result.reduce((acc, cur) => acc + cur, 0));
});

function calculator(a, b, c) {
    const numA = parseInt(a);
    const numC = parseInt(c);

    if (b === '+') return numA + numC;
    if (b === '-') return numA - numC;
    if (b === '*') return numA * numC;
    if (b === '/') return Math.floor(numA / numC);
}
