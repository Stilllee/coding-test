function solution(n) {
    let result = 0;
    const number = n.toString();
    for (let i = 0; i < number.length; i++) {
        result += parseInt(number[i]);
    }
    return result;
}