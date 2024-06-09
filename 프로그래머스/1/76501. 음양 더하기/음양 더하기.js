function solution(absolutes, signs) {
    // 1. 누적된 합 sum을 초기화
    let sum = 0;
    
    // 2. absolutes와 signs 배열을 동시에 순회하며 합 계산
    for (let i = 0; i < absolutes.length; i++) {
        // signs[i]가 true이면 양수, false이면 음수로 처리하여 합산
        if (signs[i]) {
            sum += absolutes[i];
        } else {
            sum -= absolutes[i];
        }
    }
    
    // 3. 결과 출력
    return sum;
}