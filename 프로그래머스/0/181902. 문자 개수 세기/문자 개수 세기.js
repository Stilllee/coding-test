function solution(my_string) {
    const counts = new Array(52).fill(0);    
    for (let i = 0; i < my_string.length; i++) {
        let asciiCode = my_string.charCodeAt(i);
        if (asciiCode >= 97) {
            counts[asciiCode - 71]++;
        } else {
            counts[asciiCode - 65]++;
        }
    }    
    return counts;
}