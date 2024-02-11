function solution(my_string, indices) {
    let arr = [...my_string];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!indices.includes(i)) {
            result.push(arr[i]);
        }
    }
    return result.join('');
}