function solution(arr, k) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (answer.length === k) break;
        if (!answer.includes(arr[i])) {
            answer.push(arr[i]);
        }
    }
    
    while (answer.length < k) {
        answer.push(-1);
    }
    
    return answer;
}