function solution(num_list) {
    let sum = num_list[0];
    let multi = num_list[0];
    for(let i = 1; i < num_list.length; i++){
        sum += num_list[i];
        multi *= num_list[i];        
    }
    return (sum**2) > multi ? 1 : 0
}