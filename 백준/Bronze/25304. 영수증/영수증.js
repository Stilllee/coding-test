const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const totalAmount = parseInt(input[0]);

const type = parseInt(input[1]);

let sum = 0;

for (let i = 2; i < input.length; i++) {
    const [amount, name] = input[i].split(' ').map(Number);
    sum += amount * name;
}

if (sum === totalAmount) {
    console.log('Yes');
} else {
    console.log('No');
}