function solution(my_str, q) {
    for (let [start, end] of q) {
        let left = my_str.substring(0, start);
        let middle = my_str.substring(start, end + 1).split('').reverse().join('');
        let right = my_str.substring(end + 1);
        my_str = left + middle + right;
    }
    return my_str;
}