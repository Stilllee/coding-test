function solution(num_list) {
    return num_list
        .map(num => {
            const binary = num.toString(2);
            return binary.length - 1;
        })
        .reduce((a, c) => a + c);
}