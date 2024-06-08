function solution(s) {
    const arr = s.split('');
    
    // sort
    // 음수 값: a가 b보다 앞에 있어야 함
    // 양수 값: a가 b보다 뒤에 있어야 함
    arr.sort((a, b) => {
        if (a > b) return -1; // a가 b보다 크면 a를 b 앞에 놓음
        if (a < b) return 1; // a가 b보다 작으면 a를 b 뒤에 놓음
        return 0; // a와 b가 같으면 순서 유지
    });
    
    return arr.join('');
}