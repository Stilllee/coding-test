function solution(board, k) {
    return board.reduce((totalSum, currentRow, i) => {
        return totalSum + currentRow.reduce((rowSum, cell, j) => {
            if (i + j <= k) {
                return rowSum + cell;
            }
            return rowSum;
        }, 0);
    }, 0);
}