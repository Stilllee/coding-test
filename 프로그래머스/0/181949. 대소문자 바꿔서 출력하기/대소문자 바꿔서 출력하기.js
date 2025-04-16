const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const toggleCase = (str) => {
    return [...str].map((char) => {
        if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            return char.toUpperCase();
        } else {
            return char;
        }
    }).join('');
}

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const result = toggleCase(str);
    console.log(result);
});