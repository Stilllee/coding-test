function solution(s1, s2) {
    var answer = 0;
    for (let i = 0; i < s1.length; i++) {
        s2.includes(s1[i]) ? answer+=1 : answer;
    }
    return answer;
}