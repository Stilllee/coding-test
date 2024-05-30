function solution(num_list, n) {
    var answer = [];
    
    // num_list의 길이가 0이 될 때까지 반복
    while(num_list.length) {
        // num_list에서 처음부터 n개의 요소를 잘라내어 answer에 추가
        answer.push(num_list.splice(0, n));
    }
    
    return answer;
}