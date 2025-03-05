/**
 * 스위핑 알고리즘 사용
 * 1. 모든 점 모으기
 * 2. 점들을 정렬하기
 * 3. 왼쪽에서 오른쪽으로 스캔하기
 */
function solution(lines) {
    // 1. 모든 점을 배열에 저장
    const points = [];
    
    lines.forEach(([start, end]) => {
        // 시작점은 type: 1, 끝점은 type: -1
        points.push({ position: start, type: 1 });
        points.push({ position: end, type: -1 });
    })
    
    // 2. 점들을 위치별로 정렬
    points.sort((a, b) => {
        if (a.position !== b.position) return a.position - b.position;
        // 위치가 같을 경우에는 시작점이 먼저 오도록
        return b.type - a.type;
    })
    
    // 3. 왼쪽에서 오른쪽으로 스캔
    let activeLines = 0; // 활성 선분 수
    let overlapLength = 0; // 겹치는 부분의 총 길이
    let lastPosition = null; // 이전 위치
    
    for (const point of points) {
        // 활성 선분이 2개 이상이면 겹치는 길이 계산
        if (activeLines >= 2 && lastPosition !== null) {
            overlapLength += point.position - lastPosition;
        }
        
        // 현재 선분 상태 업데이트 (시작: +1, 끝: -1)
        activeLines += point.type;
        
        lastPosition = point.position;
    }
    
    return overlapLength;
}