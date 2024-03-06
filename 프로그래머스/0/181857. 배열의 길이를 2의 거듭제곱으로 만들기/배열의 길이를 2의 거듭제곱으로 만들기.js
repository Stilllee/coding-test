function solution(arr) {
    var answer = [...arr];
    let i = 0;
    
    while (answer.length > Math.pow(2, i)) {
        i++;
    }
        
    while(answer.length !== Math.pow(2, i)) {
        answer.push(0);
    }      
    return answer;
}