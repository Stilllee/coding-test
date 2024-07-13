const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const m = parseInt(input[2]);

// 중복되지 않는 값을 저장할 수 있는 자료구조 Set 객체를 활용 -> has 메서드 사용 가능
const arr1 = new Set(input[1].split(' ').map(Number));
const arr2 = input[3].split(' ').map(Number);

let result = [];

for (const num of arr2) {
    // has 메서드는 특정 값이 집합에 존재하는지 빠르게 확인할 수 있음
    if (arr1.has(num)) {
        result.push(1);
    } else {
        result.push(0);
    }
}

console.log(result.join('\n'));