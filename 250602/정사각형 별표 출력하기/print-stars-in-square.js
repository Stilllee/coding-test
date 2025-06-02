const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < n; j++) {
        line += '*';
    }

    console.log(line);
}