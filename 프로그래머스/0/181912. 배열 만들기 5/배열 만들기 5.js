const solution = (intStrs, k, s, l) => {
    return intStrs
        .map(v => parseInt(v.slice(s, s + l)))
        .filter(num => num > k);
}