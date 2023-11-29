function solution(num_list) {
    let answer = (num_list.length > 10) ? 0 : 1;
    for(let i = 0; i < num_list.length; i++) {
        if(num_list.length > 10) {
            answer+= num_list[i];
        } else {
            answer*= num_list[i];
        }
    }
    return answer;
}