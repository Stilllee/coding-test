function solution(num_str) {
    let answer = 0;
    const arr = Array.from(num_str);
    for(let i = 0; i < arr.length; i++) {
        answer += +arr[i];
    }
    return answer;
}