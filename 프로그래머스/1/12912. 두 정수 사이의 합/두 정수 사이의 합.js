function solution(a, b) {
    let answer = 0;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    let i = min;
    while (i <= max) {
        answer += i;
        i++;
    }
    return answer;
}