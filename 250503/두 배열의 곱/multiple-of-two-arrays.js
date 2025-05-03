const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = Array(3).fill(0).map(() => Array(3).fill(0));
let arr2 = Array(3).fill(0).map(() => Array(3).fill(0));

for (let i = 0; i < 3; i++) {
    arr1[i] = input[i].split(" ").map(Number);
}

for (let i = 0; i < 3; i++) {
    arr2[i] = input[i + 4].split(" ").map(Number);
}

let arr3 = Array(3).fill(0).map(() => Array(3).fill(0));
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr3[i][j] = arr1[i][j] * arr2[i][j];
    }
}

for (let row of arr3) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}
