function solution(before, after) {
    const arrB = before.split('').sort().join('');
    const arrA = after.split('').sort().join('');
    
    return arrB === arrA ? 1 : 0;
}