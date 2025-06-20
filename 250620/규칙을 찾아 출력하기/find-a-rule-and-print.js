const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

/**
 * 규칙
 * 첫 줄 (i === 0)과 마지막 줄 (i === n - 1)은 모두 '*'
 * 각 줄의 첫 칸 (j === 0)과 마지막 칸 (j === n - 1)은 '*'
 * 내부 영역에서는 j < i이면 '*', j >= i이면 공백
 */

let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n-1 || j === 0 || j === n-1 || j < i) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    console.log(str);
}