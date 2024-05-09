function solution(n) {
    // 숫자풀이가 더 빠름
    const nums = [];
    do {
        nums.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0)
    
    return nums.sort((a, b) => b - a).join('') * 1;
}