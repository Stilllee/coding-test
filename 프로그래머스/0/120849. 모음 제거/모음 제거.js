function solution(my_string) {
    var answer = '';
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = 0; i < my_string.length; i++) {
        if(!vowel.includes(my_string[i])) {
            answer += my_string[i];
        }
    }    
    return answer;
}