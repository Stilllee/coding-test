function solution(chicken) {
    let service = 0;
    let coupon = chicken;
    
    while (coupon >= 10) {
        const serviceChicken = Math.floor(coupon / 10);
        service += serviceChicken;
        coupon = serviceChicken + (coupon % 10);
    }
    
    return service;
}