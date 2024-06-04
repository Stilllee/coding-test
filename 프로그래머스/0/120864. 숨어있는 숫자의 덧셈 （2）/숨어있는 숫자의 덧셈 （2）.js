function solution(my_string) {
    // 문자열에서 모든 숫자를 추출
    const numbers = my_string.match(/\d+/g);
    
    if (!numbers) {
        return 0;
    };
    
    const sum = numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    
    return sum;
}