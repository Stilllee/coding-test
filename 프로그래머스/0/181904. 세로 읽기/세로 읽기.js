function solution (str, m, c) {
    let result = '';
    for(let i = c - 1; i < str.length; i+= m) {
            result += str[i];
    }
    return result;
}
