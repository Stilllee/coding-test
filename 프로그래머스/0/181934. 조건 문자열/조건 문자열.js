const trueOrFalse = (ineq, eq, n, m) => {
    const str = ineq + eq;
    switch(str){
        case ">=":
            return n >= m;
        case "<=":
            return n <= m;
        case ">!":
            return n > m;
        case "<!":
            return n < m;
    }
}

function solution(ineq, eq, n, m) {
    return trueOrFalse(ineq, eq, n, m) ? 1 : 0;
}