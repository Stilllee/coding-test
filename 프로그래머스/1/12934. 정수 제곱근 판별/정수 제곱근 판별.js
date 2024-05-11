function solution(n) {
    const x = Math.pow(n, 0.5);
    return x % 1 === 0 ? Math.pow((x + 1), 2) : -1;
}