function solution(a, b) {
    const aToB = Number(String(a) + b);
    const bToA = Number(String(b) + a);
    return aToB > bToA ? aToB : bToA;
}