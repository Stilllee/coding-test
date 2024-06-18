const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

input.sort((a, b) => a - b);

// 학생 번호를 인덱스로 사용하여 과제 제출 여부 체크
const list = Array(30).fill(0);

// 제출한 학생 번호를 true로 표시
for (let i = 0; i < list.length; i++) {
    list[input[i] - 1] = true;
}

// 과제 제출하지 않은 학생의 번호 출력
for (let i = 0; i < list.length; i++) {
    if (!list[i]) {
        console.log(i + 1);
    }
}