const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    answer = '';
    for(const s of str){
        // A-Z : 65 ~ 90
        // a-z : 97 ~ 122
        if(s.charCodeAt() < 97){
            answer += s.toLowerCase();
        } else {
            answer += s.toUpperCase();
        }
    }
    console.log(answer);
});