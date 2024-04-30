function solution(box, n) {
    const [width, depth, height] = box;
    return Math.floor(width / n) * Math.floor(depth / n) * Math.floor(height / n);
}