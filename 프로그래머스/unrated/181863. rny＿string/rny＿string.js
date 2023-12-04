function solution(rny_string) {
    let arr = rny_string.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'm') {
            arr[i] = 'rn';
        }
    }
    return arr.join('');
}