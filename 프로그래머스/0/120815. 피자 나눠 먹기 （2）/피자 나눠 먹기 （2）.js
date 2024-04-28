// 피자 균등 분배 방법
// (n과 6의 최소공배수) / 6 === n / (n과 6의 최대공약수)

// 최대공약수를 구하는 함수
function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(n) {
    let g = gcd(6, n);
    return (n / g);
}