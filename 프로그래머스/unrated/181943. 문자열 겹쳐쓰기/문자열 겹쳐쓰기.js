function solution(my_string, overwrite_string, s) {
    let answer = '';
    let str1 = my_string.substring(0,s);
    let str2 = overwrite_string;
    let str3 = my_string.substring(s + overwrite_string.length);
    answer = str1 + str2 + str3;
    return answer;
}