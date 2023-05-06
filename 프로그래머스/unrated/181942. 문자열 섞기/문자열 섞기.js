function solution(str1, str2) {
    var answer = '';
    const len = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < len; i++) {
        if (i < str1.length) {
            answer += str1[i];
        }
        if (i < str2.length) {
            answer += str2[i];
        }
    }
    
    return answer;
}