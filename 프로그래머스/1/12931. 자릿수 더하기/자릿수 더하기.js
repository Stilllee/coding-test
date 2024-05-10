function solution(n) {
    const arr = (n + "").split('');
    return arr.reduce((acc, cur) => acc + +cur, 0);
}