function solution(num_list) {
    let sum = num_list.reduce((accumulator, currentValue)=>{return accumulator + currentValue;}, 0)
    let mul = num_list.reduce((accumulator, currentValue)=>{return accumulator * currentValue;}, 1)
    return (mul < sum**2) ? 1 : 0;
}