function solution(str) {
    return [...str].map(v => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase()).join('');
}