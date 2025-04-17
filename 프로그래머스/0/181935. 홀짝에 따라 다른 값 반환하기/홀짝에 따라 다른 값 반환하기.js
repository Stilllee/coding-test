const isEven = (num) => num % 2 === 0;

const sumOfOdds = (num) => {
    let total = 0;
    for (let i = 1; i <= num; i+=2) {
        total += i;
    }
    return total;
}

const sumOfSquareEvens = (num) => {
    let total = 0;
    for (let i = 2; i <= num; i+=2) {
        total += i ** 2;
    }
    return total;
}

function solution(n) {
    return isEven(n) ? sumOfSquareEvens(n) : sumOfOdds(n);
}