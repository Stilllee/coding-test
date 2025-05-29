const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';
// 정수 부분 출력
result += parseInt(a / b) + '.';

// a를 b로 나눈 나머지를 시작으로 소수점 자리를 하나씩 계산
a %= b;
for (let i = 0; i < 20; i++) {
    // 나머지에 10을 곱한 값을 기준으로 b로 나누었을 때의 몫을 구함
    a *= 10;
    result += parseInt(a / b);

    // a를 b로 나눈 나머지를 계속 갱신
    a %= b;
}

console.log(result);