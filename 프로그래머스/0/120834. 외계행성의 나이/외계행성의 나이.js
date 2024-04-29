// 문자열 자체도 인덱스 접근 가능

function solution(age) {
    return age
    .toString()
    .split('')
    .map((c) => 'abcdefghij'[c])
    .join('');
}