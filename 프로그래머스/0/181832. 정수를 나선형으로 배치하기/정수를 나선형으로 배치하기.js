function solution(n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push([]);
    }
    
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    
    while (num <= n * n) {
        // 왼쪽에서 오른쪽으로 이동하며 숫자 채우기
        for (let i = left; i <= right; i++) {
            answer[top][i] = num;
            num++;
        }
        top++;
        
        // 위쪽에서 아래쪽으로 이동하며 숫자 채우기
        for (let i = top; i <= bottom; i++) {
            answer[i][right] = num;
            num++;
        }
        right--;
        
        // 오른쪽에서 왼쪽으로 이동하며 숫자 채우기
        for (let i = right; i >= left; i--) {
            answer[bottom][i] = num;
            num++;
        }
        bottom--;
        
        // 아래쪽에서 위쪽으로 이동하며 숫자 채우기
        for (let i = bottom; i >= top; i--) {
            answer[i][left] = num;
            num++;
        }
        left++;
    }
    
    // 배열의 크기가 홀수일 때 가운데 값 채우기
    if (n % 2 === 1) {
        const center = Math.floor(n / 2);
        answer[center][center] = n * n;
    }
    
    return answer;
}