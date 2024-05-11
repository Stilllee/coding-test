function solution(a, b, answer = 0) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    
    return answer;
}