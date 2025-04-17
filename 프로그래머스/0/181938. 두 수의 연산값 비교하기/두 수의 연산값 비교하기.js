function solution(a, b) {
    const sum = Number(`${a}${b}`);
    const mul = 2 * a * b;
    
    return sum >= mul ? sum : mul;
}