function solution(array) {
    let result = [];
    const maxNum = Math.max(...array);
    result.push(maxNum, array.indexOf(maxNum));
    
    return result;
}