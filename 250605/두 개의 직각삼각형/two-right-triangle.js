const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let str = '';

    if (i === 1) {
        str = '*'.repeat(n * 2);
    } else {
        const left = '*'.repeat(n - i + 1);
        const spaces = ' '.repeat(2 * (i - 1));
        str = left + spaces + left;
    }
    console.log(str);
}