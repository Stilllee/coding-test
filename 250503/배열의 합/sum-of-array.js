const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// for (let line of input) {
//     let total = 0;
//     line = line.split(' ').map(Number);
//     for (let el of line) {
//         total += el;
//     }
//     console.log(total);
// }

let arr2d = [];
for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < 4; i++) {
    let sum = 0;
    for (let j = 0; j < 4; j++) {
        sum += arr2d[i][j];
    }
    console.log(sum);
}