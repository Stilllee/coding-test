const morse = {
    '.-':'a', '-...':'b', '-.-.':'c', '-..':'d', '.':'e', '..-.':'f',
    '--.':'g', '....':'h', '..':'i', '.---':'j', '-.-':'k', '.-..':'l',
    '--':'m', '-.':'n', '---':'o', '.--.':'p', '--.-':'q', '.-.':'r',
    '...':'s', '-':'t', '..-':'u', '...-':'v', '.--':'w', '-..-':'x',
    '-.--':'y', '--..':'z'
};

function solution(letter) {
    var answer = '';
    
    const arr = letter.split(' ');
    
    for (let code of arr) {
        answer += morse[code];
    }
    
    return answer;
}