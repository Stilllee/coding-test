function solution(n, k) {
    const answer = [];    
    let i = 1;
    while(i * k <= n) {
        if(i * k % k === 0) {
            answer.push(i * k);
        }
        i++;
    }
    return answer;
}