function solution(num_list) {
    const result = [0, 0];
    for (let a of num_list) {
        result[a % 2] += 1;
    }
    return result;
}