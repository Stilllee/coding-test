function distanceCalculater(arr){
    const maxNum = Math.max(...arr);
    const minNum = Math.min(...arr);
    
    return maxNum - minNum;
}

function solution(dots) {
    let xArr = [];
    let yArr = [];
    
    dots.forEach((dot) => {
        xArr.push(dot[0]);
        yArr.push(dot[1]);
    });
    
    return distanceCalculater(xArr) * distanceCalculater(yArr);
}