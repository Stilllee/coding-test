function solution(a, b, c) {
    const sum = a + b + c;
    const squareSum = a ** 2 + b ** 2 + c ** 2;
    const cubeSum = a ** 3 + b ** 3 + c ** 3;
    
    if(a === b && b === c){
        return sum * squareSum * cubeSum;
    } else if (a !== b && b !== c) {
        return sum;
    } else {
        return sum * squareSum;
    }
}