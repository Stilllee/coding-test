function solution(s1, s2) {
    var answer = s1.filter(v => s2.includes(v));
    return answer.length;
}