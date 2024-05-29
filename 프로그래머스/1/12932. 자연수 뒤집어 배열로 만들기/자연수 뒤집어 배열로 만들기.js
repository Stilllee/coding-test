function solution(n) {
    let str = n.toString();
    let arr = str.split('').reverse();
    
    return arr.map(item => Number(item));
}