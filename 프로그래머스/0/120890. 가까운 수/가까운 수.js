function solution(array, n) {
    // 배열을 정렬한다. 정렬 기준은 두 가지이다.
    array.sort((a, b) => {
        // 1. n과 a, n과 b의 차이의 절대값을 비교해서 차이가 작은 값이 앞에 온다.
        return Math.abs(n - a) - Math.abs(n - b) ||
        
        // 2. 첫 번째 기준이 같다면, a와 b 자체를 비교해 더 작은 값이 앞에 온다.
        a - b
    });
    
    // 정렬된 배열의 첫 번째 요소는 n에 가장 가까운 수이거나, 동일한 차이를 가지는 경우 더 작은 수이다.
    return array[0];
}