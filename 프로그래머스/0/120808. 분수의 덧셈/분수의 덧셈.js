function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

function solution(n1, d1, n2, d2) {
    const n = (n1 * d2) + (n2 * d1);
    const d = d1 * d2;    
    const g = gcd(n, d);    
    
    return [n / g, d / g];
}