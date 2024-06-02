function solution(n) {
    // 초기 팩토리얼 값을 1로 설정
    let i = 1;
    let factorial = 1;
    
    // 무한 반복문을 통해 팩토리얼 값을 계산
    while (true) {
        // 다음 팩토리얼 값이 n을 초과하면 반복문을 종료
        if (factorial * (i + 1) > n) {
            break;
        }
        // i 값을 증가시키고, 현재 i에 대한 팩토리얼 값을 계산
        i++;
        factorial *= i;
    }
    
    // 가장 큰 팩토리얼 값을 가진 i를 반환
    return i;
}