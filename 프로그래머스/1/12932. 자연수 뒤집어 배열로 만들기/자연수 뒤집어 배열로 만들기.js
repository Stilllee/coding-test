function solution(n) {
    let str = n.toString();
    let arr = str.split('').reverse();
    
    // arr.map(Number)는 각 배열 요소를 Number 함수에 전달하여 숫자로 변환
    // 이는 arr.map(item => Number(item))와 동일하게 작동
    return arr.map(Number);
}