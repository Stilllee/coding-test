function solution(numbers) {
    let sum = 0;
    const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < allNumbers.length; i++) {
        if (!numbers.includes(allNumbers[i])) {
            sum += allNumbers[i];
        }
    }
    
    return sum;
}