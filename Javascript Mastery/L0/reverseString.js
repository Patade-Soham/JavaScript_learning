const prompt = require('prompt-sync')();

let str = prompt('Enter your string : ');


let rev_str = ''

for(let i = str.length-1 ; i>=0;i--){
    rev_str = rev_str+str[i]
}
console.log(rev_str)