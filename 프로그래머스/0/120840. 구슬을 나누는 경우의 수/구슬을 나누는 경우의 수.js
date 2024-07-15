// 팩토리얼: 양의 정수 n에 대해 1부터 n까지의 모든 정수를 곱한 값
function factorial(n) {
    // 0!은 1로 정의 -> 수학적 약속
    // 1!은 당연히 1
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solution(balls, share) {
    // 조합을 구하는 공식: n! / ((n-m)! * m!)
    const result =  factorial(balls) / (factorial(balls - share) * factorial(share));
    // Math.round() 함수를 사용하여 JavaScript의 소수점 문제를 해결하고, 결과를 반올림하여 정수로 반환
    return Math.round(result);
}