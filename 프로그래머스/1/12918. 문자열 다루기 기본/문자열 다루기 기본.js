function solution(s) {
    // 1. 길이 확인
    const isValidLength = s.length === 4 || s.length === 6;

    // 2. 숫자로만 구성되어 있는지 확인
    const isNumeric = /^\d+$/.test(s);

    // 3. 결과 반환
    return isValidLength && isNumeric;
}
