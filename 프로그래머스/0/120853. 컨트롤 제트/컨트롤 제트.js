function solution(s) {
    let result = [];
    const strArr = s.split(" ");
    
    strArr.forEach((item, idx) => {
        if (item === "Z") {
            result.push(-strArr[idx - 1]);
        } else {
            result.push(Number(item));
        }
    })
    
    return result.reduce((acc, cur) => acc += cur, 0);
}