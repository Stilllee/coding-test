function solution(binomial) {
    const arr = binomial.split(' ');
    
    switch(arr[1]) {
        case '+':
            return parseInt(arr[0]) + parseInt(arr[2]);
        case '-':
            return parseInt(arr[0]) - parseInt(arr[2]);
        case '*':
            return parseInt(arr[0]) * parseInt(arr[2]);
    }
}