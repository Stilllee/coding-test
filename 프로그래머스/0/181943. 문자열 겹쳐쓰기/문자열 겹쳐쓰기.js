function solution(my_string, overwrite_string, s) {
    let answer = '';
    const myStrLeng = my_string.length;
    const overwriteStrLeng = overwrite_string.length;
    const restStrLeng = myStrLeng - overwriteStrLeng - s;
    answer += my_string.slice(0, s);
    answer += overwrite_string;
    if (restStrLeng === 0) return answer;
    return answer += my_string.slice(-restStrLeng);
}