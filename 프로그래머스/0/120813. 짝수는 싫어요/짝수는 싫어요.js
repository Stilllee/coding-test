function solution(n) {
    const length = Math.ceil(n / 2);
    
    return Array.from({length}, (_, i) => 2 * i + 1);
};