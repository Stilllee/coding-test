function solution(n) {
    let answer = 0;
    
    for(let i = 0; i < n; i++) {
        answer++;
        
        while(answer % 3 === 0 || String(answer).includes('3')) {
            answer++;
        }
    }
    
    return answer;
}