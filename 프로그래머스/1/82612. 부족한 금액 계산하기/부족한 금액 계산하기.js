function solution(price, money, count) {
    let remainingMoney = money;
    for (let i = 1; i <= count; i++) {
        remainingMoney -= price * i;
    }
    
    if (remainingMoney >= 0) {
        return 0;
    } else {
        return Math.abs(remainingMoney);
    }
}