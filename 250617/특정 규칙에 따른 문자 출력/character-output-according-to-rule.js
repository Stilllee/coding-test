const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for (let i = 1; i <= n; i++) {
    str = '';
    for (let j = 1; j <= n - i; j++) {
        str += '  ';
    }
    for (let j = 1; j <= i; j++) {
        str += '@ ';
    }
    console.log(str);
}

for (let i = 1; i < n; i++) {
    str = '';
    for (let j = 1; j <= n - i; j++) {
        str += '@ ';
    }
    for (let j = 1; j <= i; j++) {
        str += '  ';
    }
    console.log(str);
}