function solution(my_string, k) {
    var answer = '';
    let i = 0;
    while (i !== k) {
        answer += my_string;
        i++;
    }
    return answer;
}