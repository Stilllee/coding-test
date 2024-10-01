function clamp(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

function solution(keyinput, board) {
    const [xLimit, yLimit] = board.map((v) => (v - 1) / 2);
    
    const moves = {
        left: [-1, 0],
        right: [1, 0],
        up: [0, 1],
        down: [0, -1]
    };
    
    return keyinput.reduce((position, direction) => {
        const [dx, dy] = moves[direction];
        const newX = clamp(position[0] + dx, -xLimit, xLimit);
        const newY = clamp(position[1] + dy, -yLimit, yLimit);
        
        return [newX, newY];
    }, [0, 0]);
}