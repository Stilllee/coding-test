function solution(str) {
    let answer = 0;
    const numbers = str.replace(/[^0-9]/g, "");
    let i = 0;
    while(i < numbers.length){
        answer += parseInt(numbers[i]);
        i++;
    }
    return answer;
}