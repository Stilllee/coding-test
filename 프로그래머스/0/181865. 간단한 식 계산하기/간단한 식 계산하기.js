function solution(binomial) {
    const arr = binomial.split(' ');    
    if (arr[1] === '+') return parseInt(arr[0]) + parseInt(arr[2]);
    if (arr[1] === '-') return parseInt(arr[0]) - parseInt(arr[2]);
    if (arr[1] === '*') return parseInt(arr[0]) * parseInt(arr[2]);
}