function isUpperCase(str) {
  return str === str.toUpperCase();
}

function solution(my_string) {
    return [...my_string].map((v) => isUpperCase(v) ? v.toLowerCase() : v.toUpperCase()).join('');
}