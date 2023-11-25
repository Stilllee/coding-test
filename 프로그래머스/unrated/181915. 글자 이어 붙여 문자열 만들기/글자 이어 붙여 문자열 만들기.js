function solution(my_string, index_list) {
    const answer = [];
    arr = Array.from(my_string);
    for(let i = 0; i < index_list.length; i++) {
      answer.push(arr[index_list[i]]);
    }
    return answer.join('');
}
