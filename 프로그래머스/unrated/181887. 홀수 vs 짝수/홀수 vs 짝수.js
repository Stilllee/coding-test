function solution(num_list) {
    const [oddSum, evenSum] = num_list.reduce(([odd, even], curr, index) => {
        if(index % 2 === 0) {
            even += curr;
        } else {
            odd += curr;
        }
        return [odd, even];
    }, [0, 0]);
    return Math.max(oddSum, evenSum);
}