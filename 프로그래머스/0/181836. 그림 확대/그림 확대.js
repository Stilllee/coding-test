function solution(picture, k) {
    var answer = [];
    
    for (let row of picture) {
        let expandedRow = '';
        for (let char of row) {
            expandedRow += char.repeat(k);
        }
        
        for (let i = 0; i < k; i++) {
            answer.push(expandedRow);
        }
    }
    
    return answer;
}