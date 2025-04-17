const checkEven = (num) => num % 2 === 0;

const sumOdd = (num) => {
    let total = 0;
    for (let i = 1; i <= num; i+=2) {
        total += i;
    }
    return total;
}

const multEven = (num) => {
    let total = 0;
    for (let i = 2; i <= num; i+=2) {
        total += Math.pow(i, 2);
    }
    return total;
}

function solution(n) {
    return checkEven(n) ? multEven(n) : sumOdd(n);
}