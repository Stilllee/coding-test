function solution(a, b) {
    if (a % 2 !== b % 2) return 2 * (a + b);
    if (a % 2 === 0 && b % 2 === 0) return Math.abs(a - b);
    return Math.pow(a, 2) + Math.pow(b, 2);
}