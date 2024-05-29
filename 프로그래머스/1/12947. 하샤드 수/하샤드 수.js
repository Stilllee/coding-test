function solution(x) {
    let str = x.toString();
    let arr = str.split('').map(Number);
    let sum = arr.reduce((acc, cur) => acc += cur);
    
    return x % sum === 0 ? true : false;
}