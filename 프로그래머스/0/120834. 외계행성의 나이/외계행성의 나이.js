function solution(age) {
    let answer = '';
    let ageString = age.toString();
    
    for (let i = 0; i < ageString.length; i++) {
        let num = parseInt(ageString[i]);
        let char = String.fromCharCode(97 + num);
        answer += char;
    }
    
    return answer;
}