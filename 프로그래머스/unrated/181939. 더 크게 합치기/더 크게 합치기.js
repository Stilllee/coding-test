function solution(a, b) {
    let answer = 0;
    
    result1 = Number(String(a) + b);
    result2 = Number(String(b) + a);
    if(result1 >= result2){
        answer = result1
    } else {
        answer = result2
    }    
    return answer;
}