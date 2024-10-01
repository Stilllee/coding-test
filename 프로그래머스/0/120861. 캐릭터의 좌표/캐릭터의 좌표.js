function solution(keyinput, board) {
    const coordinate = [0, 0];
    const [w, h] = board;
    const xLimit = (w - 1 ) / 2;
    const yLimit = (h - 1) / 2;
    
    keyinput.forEach((dir) => {
        if (dir === 'left' && coordinate[0] > -xLimit) {
            coordinate[0]--;
        } else if (dir === 'right' && coordinate[0] < xLimit) {
            coordinate[0]++;
        } else if (dir === 'up' && coordinate[1] < yLimit) {
            coordinate[1]++;
        } else if (dir === 'down' && coordinate[1] > -yLimit) {
            coordinate[1]--;
        }
    });
    return coordinate;
}