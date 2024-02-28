function solution(myString, pat) {
    let count = 0;
    let startIndex = 0;
    
    while (true) {
        startIndex = myString.indexOf(pat, startIndex);        
        if (startIndex === -1) break;        
        count++;
        startIndex++;
    }
    
    return count;
}