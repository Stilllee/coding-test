const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
        if (j % 2 === 0) {
            row += (i + 1);
        } else {
            row += (n - i);
        }
    }
    console.log(row);
}