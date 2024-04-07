function solution(order) {
    let count = 0;
    
    for (let i = 0; i < order.length; i++) {
        if(order[i].includes('latte')) {
            count += 5000;
        } else {
            count += 4500;
        }
    }
    return count;
}