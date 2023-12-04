function solution(arr, k) {
    return arr.map((item) => {
        if(k % 2 === 0) {
            return item + k;
        } else {
            return item * k;
        }
    })
}