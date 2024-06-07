function solution(my_str, n) {
    var answer = [];
    
    for (let i = 0; i < my_str.length; i+=n) {
        const idx = my_str.indexOf(i);
        answer.push(my_str.slice(i, i + n));
    };
    
    return answer;
}