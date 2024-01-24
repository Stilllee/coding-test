const solution = (str, s, e) => {
    return str.slice(0, s)
        + str.slice(s, e + 1).split('').reverse().join('') 
        + str.slice(e + 1);
}