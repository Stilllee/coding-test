const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

// 첫 번째 줄에서 테스트 케이스의 수를 추출
const T = parseInt(input[0]);

// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
}