function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        const query = queries[i];
        const [index1, index2] = query;
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    return arr;
}