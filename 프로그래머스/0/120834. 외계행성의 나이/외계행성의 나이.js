function solution(age) {
    return age.toString().split('').map(c => String.fromCharCode(97 + +c)).join('');
}