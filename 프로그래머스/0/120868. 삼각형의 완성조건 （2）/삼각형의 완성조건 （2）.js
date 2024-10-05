function solution(sides) {
    const [a, b] = sides;
    const maxNum = Math.max(a, b);
    const minNum = Math.min(a, b);
    let count = 0;

    // 1. c가 가장 큰 경우 (maxNum < c < a + b)
    for (let c = maxNum + 1; c < a + b; c++) {
        count++;
    }
    
    // 2. maxNum이 가장 큰 경우 (maxNum - minNum < c <= maxNum)
    for (let c = maxNum - minNum + 1; c <= maxNum; c++) {
        count++;
    }
    
    return count;
}