const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

/**
 * 규칠
 * 홀수 줄: 1부터 1씩 증가
 * 짝수 줄: n부터 1씩 감소
 */

let str = '';

for (let i = 1; i <= n * 2; i++) {
    str = '';
    if (i % 2 === 0) {
        for (let j = 1; j <= n - (i / 2 - 1); j++) {
            str += '* ';
        }
    } else {
        for (let j = 1; j <= Math.round(i / 2); j++) {
            str += '* ';
        }
    }
    console.log(str);   
}

