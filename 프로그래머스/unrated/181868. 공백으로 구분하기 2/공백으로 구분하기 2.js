function solution(my_string) {
    const result = [];
    const answer = my_string.split(" ");
    for(i = 0; i < answer.length; i++) {
        if(answer[i] !== "") {
            result.push(answer[i]);
        }
    }
    return result;
}