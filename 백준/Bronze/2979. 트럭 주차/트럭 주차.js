const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄: 주차 요금 A, B, C
const [A, B, C] = input[0].split(' ').map(Number);

// 두 번째 줄부터 마지막 줄까지: 트럭의 주차 시작 시간과 종료 시간이 담긴 배열
const trucks = input.slice(1).map(line => line.split(' ').map(Number));

// 시간대별 트럭 수를 저장할 배열 (1~100 시간대 사용)
const time = Array(101).fill(0);

// 각 트럭의 주차 시간 동안 시간대별로 트럭 수 증가
trucks.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
        time[i]++;
    }
});

// 총 요금 계산
let totalCost = 0;

time.forEach(count => {
    if (count === 1) {
        totalCost += A;
    } else if (count === 2) {
        totalCost += B * 2;
    } else if (count === 3) {
        totalCost += C * 3;
    }
});

console.log(totalCost);