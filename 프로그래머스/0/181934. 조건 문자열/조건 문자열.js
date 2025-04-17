const evaluateComparison = (ineq, eq, n, m) => {
    const operator = ineq + eq;
    
    switch(operator){
        case ">=": return n >= m;
        case "<=": return n <= m;
        case ">!": return n > m;
        case "<!": return n < m;
        default: return false;
    }
}

function solution(ineq, eq, n, m) {
    return evaluateComparison(ineq, eq, n, m) ? 1 : 0;
}