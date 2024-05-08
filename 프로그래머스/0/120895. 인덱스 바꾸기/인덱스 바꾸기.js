function solution(str, num1, num2) {
    const strArr = [...str];
    const a = strArr[num1];
    const b = strArr[num2];
    
    strArr[num1] = b;
    strArr[num2] = a;
    
    return strArr.join('');
}