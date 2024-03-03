function solution(myString) {
    let result = [];
    const arr = myString.split('x');
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }
    return result;
}