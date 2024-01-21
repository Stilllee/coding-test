const solution = num_list => {
    const result = [];
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] % 2 === 0 ? even += 1 : odd += 1;
    }
    result.push(even);
    result.push(odd);
    return result;
}