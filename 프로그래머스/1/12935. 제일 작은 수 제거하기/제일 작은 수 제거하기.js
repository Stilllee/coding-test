function solution(arr) {
    // 1. 주어진 배열 arr에서 가장 작은 요소를 찾는다.
    const minNum = Math.min(...arr);
    
    // 2. 가장 작은 요소를 arr에서 제거한다.
    // minNum의 인덱스 찾아서 제거
    const idx = arr.indexOf(minNum);
    arr.splice(idx, 1);
    
    // 3. 해당 배열을 반환하는데, 만약 빈 배열이면 [-1]을 반환한다.
    return arr.length > 0 ? arr : [-1];
}