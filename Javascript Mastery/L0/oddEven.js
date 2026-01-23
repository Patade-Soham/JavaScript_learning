const prompt = require("prompt-sync")();

let num = prompt('enter a number')
if(num%2==0){
    console.log(num+' is Even')
}else{
    console.log(num+' is Odd')
}