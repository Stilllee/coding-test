const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

function solution(n1, d1, n2, d2) {
    const n = (d1 * n2) + (d2 * n1);
    const d = d1 * d2;
    const g = gcd(n, d);
    
    return [n/g, d/g];
}