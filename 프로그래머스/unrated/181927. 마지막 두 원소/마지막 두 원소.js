function solution(num_list) {
    let num1 = num_list.at(-1);
    let num2 = num_list.at(-2);
    if(num1 > num2){
        num_list.push(num1 - num2);
    } else {
        num_list.push(num1 * 2);
    }
    return num_list;
}