function solution(n) {
    let arr = [];
    let remain = n;
    
    for (let i = 2; i <= remain; i++) {
        while(remain % i === 0) {
            arr.push(i);
            remain /= i;
        }
        
        if (remain === 1) break;
    }
    
    const result = [...new Set(arr)].sort((a, b) => a - b);
    
    return result;
}