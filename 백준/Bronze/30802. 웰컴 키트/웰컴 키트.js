const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().replace(/\r/g, '').trim().split('\n');

const people = parseInt(input[0]);
const sizes = input[1].split(' ').map(Number);
const [unitOfTshirt, unitOfPen] = input[2].split(' ').map(Number);

let bundledTshirt = 0;
for (let i = 0; i < sizes.length; i++) {
    bundledTshirt += Math.ceil(sizes[i] / unitOfTshirt);
}

const bundledPen = Math.floor(people / unitOfPen);
const individualPen = people % unitOfPen;

console.log(bundledTshirt);
console.log(`${bundledPen} ${individualPen}`);
