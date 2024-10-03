function solution(polynomial) {
    let result = '';
    const numArr = [];
    const xArr = [];
    let num = 0;
    let x = 0;

    polynomial.split(' + ').forEach((el) => {
        return el.includes('x') ? xArr.push(el) : numArr.push(el);
    });

    num = numArr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    xArr.forEach((el) => {
        if (el === 'x') {
            x++;
        } else {
            x += Number(el.split('x')[0]);
        }
    });

    if (x && num) {
        result += x === 1 ? `x + ${num}` : `${x}x + ${num}`;
    } else if (!x && num) {
        result += `${num}`;
    } else if (x && !num) {
        result += x === 1 ? `x` : `${x}x`;
    }
    
    return result;
}