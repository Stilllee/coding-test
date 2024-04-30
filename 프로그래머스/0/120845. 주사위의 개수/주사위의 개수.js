function solution(box, n) {
    return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}