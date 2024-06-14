const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

// 카운트 결과를 담을 배열 생성
const count = Array(10).fill(0);

// 입력에서 a, b, c 가져오기
const [a, b, c] = input;

// a x b x c를 계산한 결과를 문자열로 변환 후 숫자로 나눠 배열로 만들기
const result = (a * b * c).toString().split('').map(Number);

// 배열을 순회하면서 해당하는 인덱스의 카운트 증가시키기
for (const num of result) {
    count[num]++;
}

// 카운트 배열을 순회하면서 횟수 출력하기
for (const c of count) {
    console.log(c);
}