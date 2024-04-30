function solution(my_string) {    
    return [...my_string].map(c => c.toLowerCase()).sort().join('');
}