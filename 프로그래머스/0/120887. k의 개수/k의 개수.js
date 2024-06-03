function solution(i, j, k) {
    const strK = String(k);
    let count = 0;
    
    for (let num = i; num <= j; num++) {
        count += String(num).split(strK).length - 1;
    }
    
    return count;
}