const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for (let i = 1; i <= n; i++) {
    result = '';
    for (let j = 1; j <= n; j++) {
        result += `${i} * ${j} = ${i * j}`;
        if (j !== n) {
            result += ', '
        }
    }
    console.log(result);
}