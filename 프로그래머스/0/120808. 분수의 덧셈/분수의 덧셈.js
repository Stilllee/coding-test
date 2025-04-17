// 최대공약수를 구하는 함수
const getGCD = (a, b) => {
    return b === 0 ? a : getGCD(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    const denominator = denom1 * denom2;
    const numerator = numer1 * denom2 + numer2 * denom1;
    
    const gcd = getGCD(numerator, denominator);
    
    return [numerator / gcd, denominator / gcd];
}