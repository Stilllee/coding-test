function solution(order) {
    const clap = new Set([3, 6, 9]);
    return String(order).split('')
                        .filter(n => clap.has(Number(n)))
                        .length;
}