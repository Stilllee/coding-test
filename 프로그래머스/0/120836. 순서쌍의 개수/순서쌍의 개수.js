function solution(n) {
    let count = 0;
    let i = 1;
    
    while(i <= n) {
        if(n % i === 0) {
            count++;
        }
        i+=1;
    }
    return count;
}