const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let str = '';
    
    // 앞쪽 공백 (i-1개)
    for (let j = 0; j < i - 1; j++) {
        str += '  ';  // 공백 2칸
    }
    
    // 별 개수 = 2*(n에서 i-1만큼 뺀 값) - 1
    const currentN = n - (i - 1);  // n이 1씩 감소
    const starCount = 2 * currentN - 1;
    for (let j = 0; j < starCount; j++) {
        str += '* ';
    }   
    console.log(str);
}