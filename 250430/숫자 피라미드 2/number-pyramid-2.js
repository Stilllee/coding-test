const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

// 줄 = n
// n번쨰 줄에는 요소 n개
// n은 1부터 시작

let count = 1;

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += `${count} `;
        count++;
    }
    console.log(str);
}