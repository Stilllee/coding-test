function solution(a, b) {
    const concatenated = Number(`${a}${b}`);
    const multiplied = 2 * a * b;
    
    return concatenated >= multiplied ? concatenated : multiplied;
}