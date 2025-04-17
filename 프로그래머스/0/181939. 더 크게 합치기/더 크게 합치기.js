function solution(a, b) {
    const aToB = Number(`${a}${b}`);
    const bToA = Number(`${b}${a}`);
    
    if (aToB === bToA) return aToB;
    
    return Math.max(aToB, bToA);
}