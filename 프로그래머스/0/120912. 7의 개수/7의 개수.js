function solution(array) {
    var answer = 0;
    
    array.forEach(num => {
        const strNum = num.toString();
        
        for (let char of strNum) {
            if (char === '7') {
                answer++;
            }
        }
    })
    
    return answer;
}