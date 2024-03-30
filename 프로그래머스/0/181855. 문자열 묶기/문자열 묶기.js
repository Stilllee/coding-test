function solution(strArr) {
    const lengthMap = new Map();
    
    for (let str of strArr) {
        const len = str.length;
        lengthMap.set(len, (lengthMap.get(len) || 0) + 1);
    }
    
    let maxCount = 0;
    
    for (let count of lengthMap.values()) {
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}