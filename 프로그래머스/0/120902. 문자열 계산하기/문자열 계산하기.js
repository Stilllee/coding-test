function solution(my_string) {
    // 문자열을 공백을 기준으로 분리
    let tokens = my_string.split(' ');
    // 초기값 설정
    let result = parseInt(tokens[0]);

    // 각 토큰을 순회하며 연산 수행
    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let number = parseInt(tokens[i + 1]);

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }

    return result;
}