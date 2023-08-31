function solution(arr, queries) {
    // queries의 각 원소를 순회
    for (let query of queries) {
        let [s, e, k] = query;

        // k가 0이면 해당 쿼리는 처리하지 않음
        if (k === 0) continue;

        // s 인덱스부터 e 인덱스까지 arr를 순회
        for (let i = s; i <= e; i++) {
            // 해당 위치가 k의 배수인 경우
            if (i % k === 0) {
                // arr[i]의 값을 1 증가
                arr[i] += 1;
            }
        }
    }
    // 모든 쿼리를 처리한 후의 arr를 반환
    return arr;
}