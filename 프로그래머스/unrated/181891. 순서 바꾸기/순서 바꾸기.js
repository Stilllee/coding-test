function solution(num_list, n) {
    const arr1 = num_list.slice(0, n);
    const arr2 = num_list.slice(n, num_list.length);
  
    return arr2.concat(arr1);
}