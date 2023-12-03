const slogan = require("fs").readFileSync("/dev/stdin").toString().trim();

let cheering;

switch(slogan) {
    case 'SONGDO':
      cheering = 'HIGHSCHOOL';
      break;
    case 'CODE':
      cheering = 'MASTER';
      break;
    case '2023':
      cheering = '0611';
      break;
    case 'ALGORITHM':
      cheering = 'CONTEST';
      break;
      default:
      cheering = 'Unknown';
}

console.log(cheering);