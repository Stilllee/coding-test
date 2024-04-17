function solution(rsp) {
    var obj = {
        2: 0,
        0: 5,
        5: 2
    };
    
    return [...rsp].map(v => obj[v]).join('');
}