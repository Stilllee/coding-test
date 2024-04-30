function solution(numbers) {
    const sortedNum = [...numbers].sort((a, b) => b - a);
    const max1 = sortedNum[0] * sortedNum[1];
    const max2 = sortedNum[sortedNum.length - 1] * sortedNum[sortedNum.length - 2];
    
    return Math.max(max1, max2);
}