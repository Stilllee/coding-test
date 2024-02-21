function solution(n, slicer, num_list) {
    const [a, b, c] = [...slicer];
    
    function cutter(x, y){
        return num_list.slice(x, y);
    }

    switch(n){
        case n = 1:
            return cutter(0, b + 1);    
        case n = 2:
            return cutter(a);
        case n = 3:
            return cutter(a, b + 1);
        default:
            return cutter(a, b + 1).filter((_, i) => i % c === 0);
    }
}