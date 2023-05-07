function solution(num_list) {
    let answer = 0;
    let odd = "";
    let even = "";
    for(let i = 0; i < num_list.length; i++){
        (num_list[i] % 2 !== 0) ? odd += num_list[i] : even += num_list[i];
        answer = Number(odd) + Number(even);
    }
    return answer;
}