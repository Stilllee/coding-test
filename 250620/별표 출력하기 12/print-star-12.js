const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

/**
 * 규칙
 * 홀수번째 열: 항상 첫 번째 행에서만 별을 출력
 * 짝수번째 열: 행 번호가 열 번호보다 크지 않은 경우에만 별을 출력
 */

let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n; j++) {
        if (j % 2 === 0) {
            if (i === 0) {
                str += '* ';
            } else {
                str += '  ';
            }
        } else {
            if (i <= j) {
                str += '* ';
            } else {
                str += '  ';
            }
        }
    }
    console.log(str);
}