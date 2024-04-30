function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(n1, d1, n2, d2) {
    const n = (n1 * d2) + (n2 * d1);
    const d = d1 * d2;    
    const g = gcd(n, d);    
    
    return [n / g, d / g];
}