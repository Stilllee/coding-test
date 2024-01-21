const solution = (money) => {
    let arr = [];
    arr.push(Math.floor(money / 5500));
    arr.push(money % 5500);
    return arr;
}