function solution(a, b) {
    const combinedAB = Number(`${a}${b}`);
    const combinedBA = Number(`${b}${a}`);
    
    return combinedAB >= combinedBA ? combinedAB : combinedBA;
}