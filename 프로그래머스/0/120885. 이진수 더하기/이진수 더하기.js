function solution(bin1, bin2) {
    console.log(bin1, bin2)
    // 이진수 문자열을 10진수로 변환
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    console.log(num1, num2)
    
    // 10진수 덧셈 수행
    const sum = num1 + num2;
    console.log(sum)
    
    // 10진수 결과를 이진수 문자열로 반환
    return sum.toString(2);
    console.log(sum)
}