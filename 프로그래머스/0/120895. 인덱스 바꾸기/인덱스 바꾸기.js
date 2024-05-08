function solution(str, num1, num2) {
    const strArr = [...str];
    [strArr[num1], strArr[num2]] = [strArr[num2], strArr[num1]];
    return strArr.join('');
}