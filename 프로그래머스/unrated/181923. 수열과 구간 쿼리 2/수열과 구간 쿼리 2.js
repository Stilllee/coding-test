function solution(arr, queries) {
    var answer = [];

    // 각 쿼리에 대해 반복
    for(let query of queries) {
        // 각 쿼리의 시작 위치, 끝 위치, 찾을 값 k를 추출
        let [s, e, k] = query;

        // 쿼리 범위 내의 값을 필터링하여 k보다 큰 값들만 가져옴
        let filtered = arr.slice(s, e + 1).filter(val => val > k);

        // 필터링된 값 중 가장 작은 값을 찾아서 결과 배열에 추가
        // 값이 없다면 -1을 추가
        if (filtered.length === 0) {
            answer.push(-1);
        } else {
            answer.push(Math.min(...filtered));
        }
    }

    return answer;
}