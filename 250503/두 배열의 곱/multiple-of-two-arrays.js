const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr1 = [];
let arr2 = [];
let result = [];

for (let i = 0; i < 3; i++) {
    let line = input[i].split(' ').map(Number);
    arr1.push(line);
}

for (let i = 4; i < 7; i++) {
    const line = input[i].split(' ').map(Number);
    arr2.push(line);
}

for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(arr1[i][j] * arr2[i][j]);
    }
    result.push(row);
}

for (let i = 0; i < 3; i++) {
    console.log(result[i].join(' '));
}