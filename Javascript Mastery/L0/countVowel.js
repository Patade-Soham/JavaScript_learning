const prompt = require("prompt-sync")();

let str = prompt('Enter your string : ');
str.toLowerCase
let counter = 0;


for(let i = 0;i<str.length;i++){
    if(str[i] == 'a'){
        counter+=1
    }
    if(str[i] == 'e'){
        counter+=1
    }
    if(str[i] == 'i'){
        counter+=1
    }
    if(str[i] == '0'){
        counter+=1
    }
    if(str[i] == 'u'){
        counter+=1
    }
}
console.log(counter)