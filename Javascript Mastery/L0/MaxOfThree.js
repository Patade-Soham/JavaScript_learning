const prompt = require('prompt-sync')();

let num1 = prompt('Enter first number :')
let num2 = prompt('Enter second number :')
let num3 = prompt('Enter third number :')

if(num1>num2 && num1>num3){
    console.log(num1+' is the greatest')
}else if(num2>num1 && num2>num3){
    console.log(num2+' is the greatest')
}else if(num3>num2 && num3>num1){
    console.log(num3+' is the greatest')
}