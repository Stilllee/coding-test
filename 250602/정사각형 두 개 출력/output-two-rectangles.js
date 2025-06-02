const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < 2; i++) {
    let result = '';
    for (let j = 0; j < n; j++) {
        let str = '';
        for (let k = 0; k < n; k++) {
            str += '*';
        }
        result += (str + '\n');
    }
    console.log(result);
}
