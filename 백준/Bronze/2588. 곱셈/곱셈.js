const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0].split('');
let b = input[1].split('');
let num = input[0];

let third = num * Number(b[2]);
let fourth = num * Number(b[1]);
let fiveth = num * Number(b[0]);

console.log(third);
console.log(fourth);
console.log(fiveth);
console.log(third+(fourth*10)+(fiveth*100));
