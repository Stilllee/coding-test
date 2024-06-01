function solution(array, n) {
    let closest = array[0];
    let minDiff = Math.abs(array[0] - n);
    
    for (let i = 1; i < array.length; i++) {
        let diff = Math.abs(array[i] - n);
        
        if (diff < minDiff || (diff === minDiff && array[i] < closest)) {
            minDiff = diff;
            closest = array[i];
        }
    }
    return closest;
}