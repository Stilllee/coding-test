function calculator(op, a, b, c){
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    if (op === '+') {
        return a + b === c ? 'O' : 'X';
    } else {
        return a - b === c ? 'O' : 'X';
    }
}

function solution(quiz) {
    return quiz.map((q) => {
        const [a, op, b, _, c] = q.split(' ');
        return calculator(op, a, b, c);
    })
}