function solution(arr) {
    return arr.every((row, i) => row.every((el, j) => el === arr[j][i])) ? 1 : 0;
}