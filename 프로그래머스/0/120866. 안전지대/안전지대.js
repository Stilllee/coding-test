function solution(board) {
    const n = board.length;
    let safeArea = n * n; // 전체 칸 수로 시작

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 지뢰가 있는 칸 확인
            if (board[i][j] === 1) {
                safeArea--; // 지뢰 칸 제외
                
                // 지뢰 주변 8칸 확인
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        // 보드 범위 안에 있고, 지뢰가 없는 칸이면
                        if (x >= 0 && x < n && y >= 0 && y < n && board[x][y] === 0) {
                            board[x][y] = 2; // 위험 지역 표시
                            safeArea--; // 안전 영역에서 제외
                        }
                    }
                }
            }
        }
    }

    return safeArea;
}