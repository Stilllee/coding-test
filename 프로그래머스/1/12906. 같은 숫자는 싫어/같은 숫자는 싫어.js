function solution(arr){
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    
    return result;
}