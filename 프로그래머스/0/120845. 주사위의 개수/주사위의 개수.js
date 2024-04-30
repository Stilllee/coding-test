function solution(box, n) {
    let answer = 1;
    for (let i = 0; i < box.length; i++) {
        answer *= Math.floor(box[i] / n);
    }
    return answer;
}