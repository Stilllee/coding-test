function solution(my_string) {
    return Array.from(my_string).filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('');
}