const solution = (dot) => {
    const [x, y] = dot;
    const check = x * y > 0;
    return check ? (x > 0 ? 1 : 3) : (x > 0 ? 4 : 2);
}