function solution(s) {
    // 1. 문자열의 길이를 구한다.
    const leng = s.length;
    
    // 2. 길이를 2로 나누고 내림한 값을 구한다. (중간 값)
    const center = Math.floor(leng / 2);
    
    // 3. 길이가 홀수라면 가운데 문자열을 출력하고, 짝수라면 그 다음 글자까지 함께 반환한다.
    return (leng % 2 !== 0) ? s[center] : s.slice(center - 1, center + 1);
}