function solution(n) {
    for (let i = n; ; i+=n) {
        if (i % 6 === 0) return i / 6;
    }
}