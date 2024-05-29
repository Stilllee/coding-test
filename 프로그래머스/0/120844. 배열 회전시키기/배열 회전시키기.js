function solution(numbers, direction) {
    // 왼쪽으로 회전:
    if (direction === 'left') {
        // 첫 번째 요소를 제거하고 반환된 값을 firstEl에 저장
        let firstEl = numbers.shift();
        // 그 값을 배열의 끝에 추가
        numbers.push(firstEl);
    // 오른쪽으로 회전:
    } else if (direction === 'right') {
        // 마지막 요소를 제거하고 반환된 값을 lastEl에 저장
        let lastEl = numbers.pop();
        // 그 값을 배열의 맨 앞에 추가
        numbers.unshift(lastEl);
    }
    return numbers;
}