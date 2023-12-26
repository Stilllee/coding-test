const solution = (num) => {
    return num.split('')
    .map(Number)
    .reduce((acc, curr) => (acc + curr) % 9);
}