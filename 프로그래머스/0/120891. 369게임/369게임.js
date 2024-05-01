function solution(order) {
    let numArr = [...order.toString()];   
    
    return numArr.reduce((acc, cur) => ['3', '6', '9'].includes(cur) ? acc + 1 : acc, 0);
}