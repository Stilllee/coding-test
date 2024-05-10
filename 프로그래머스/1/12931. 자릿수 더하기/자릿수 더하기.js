function solution(n) {
    const arr = n.toString().split('');
    return arr.reduce((acc, cur) => acc + +cur, 0);
}