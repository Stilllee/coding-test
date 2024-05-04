function solution(num, k) {
    const arr = [...num.toString()].map(v => Number(v))
    return arr.includes(k) ? arr.indexOf(k) + 1 : -1;
}