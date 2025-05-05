const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let result = [];

for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 1; j <= n; j++) {
        row.push(j);
    }
    if (i % 2 !== 0) {
        row.reverse();
    }
    result.push(row);
}

for (const row of result) {
    console.log(row.join(''));
}