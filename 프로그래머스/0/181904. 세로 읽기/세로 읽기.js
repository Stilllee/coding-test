function solution (str, m, c) {
    if (m === 1) return str;
    let result = '';
    for(let i = 0; i < str.length; i+= m) {
        if (i + c - 1 < str.length) {
            result += str[i + c - 1];
        }        
    }
    return result;
}
