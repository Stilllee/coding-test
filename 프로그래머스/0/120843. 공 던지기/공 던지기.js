function solution(numbers, k) {
    // 공 던지는 위치 계산
    // (k-1) : 첫 번째 사람의 인덱스가 0이기 때문
    // (* 2) : 한 사람씩 건너뜀
    // (% numbers.length) : 계산된 위치가 배열의 범위를 벗어나는 것을 방지
    const position = ((k -1) * 2) % numbers.length;
    return numbers[position];
}