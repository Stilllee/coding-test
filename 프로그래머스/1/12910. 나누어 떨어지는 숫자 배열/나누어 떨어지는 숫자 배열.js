function solution(arr, divisor) {
    const newArr = arr.filter(n => n % divisor === 0).sort((a, b) => a - b);
    return newArr.length ? newArr : [-1];
}