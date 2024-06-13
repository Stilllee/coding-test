const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

// 첫 번째 줄에서 N과 X를 추출
const [N, X] = input[0].split(' ').map(Number);

// 두 번째 줄에서 수열 A를 추출
const A = input[1].split(' ').map(Number);

// 결과 출력
const result = A.filter(num => num < X);
console.log(result.join(' '));