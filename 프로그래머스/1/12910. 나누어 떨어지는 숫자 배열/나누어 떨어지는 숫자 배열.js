function solution(arr, divisor) {
    const filterdArr = arr.filter((v) => v % divisor === 0);
    
    if (filterdArr.length === 0) {
        return [-1];
    } else {
        return filterdArr.sort((a, b) => a - b);
    }    
}