function solution(numbers) {
    const sortedNum = [...numbers].sort((a, b) => b - a);
    
    const max1 = sortedNum[0] * sortedNum[1];   // 원소 두 개가 모두 양수일 경우
    const max2 = sortedNum[sortedNum.length - 1] * sortedNum[sortedNum.length - 2]; // 원소 두 개가 모두 음수일 경우
    
    return Math.max(max1, max2);
}