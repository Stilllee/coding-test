function solution(str) {
    return [...new Set(str.split('').map((char) => char))].join('');
}