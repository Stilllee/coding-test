function solution(a, b) {
    let answer = 0;
    
    result1 = String(a)+b;
    result2 = 2 * a * b;
    answer = Math.max(result1, result2);
    
    return answer;
}