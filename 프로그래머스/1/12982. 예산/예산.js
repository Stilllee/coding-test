function solution(d, budget) {
    let count = 0;
    
    // 1. 신청금액이 낮은 순으로 정렬
    d.sort((a, b) => a - b);
    
    // 2. 예산이 남아있는 동안 부서의 신청 금액을 지원
    for (let i = 0; i < d.length; i++) {
        if (budget < d[i]) {
            break; // 예산이 부족하면 종료
        }
        budget -= d[i];
        count++;
    }
    
    return count;
}