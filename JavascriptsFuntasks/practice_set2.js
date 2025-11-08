//Q1 Use logical operator to find whether the age of a person lies between 10 and 20?

let age = 15;
if(age>10 && age <20){
    console.log("pass")
}
else{
    console.log("fail")
}

//Q2 Demonstrate the use of switch case statements in Js

let a=2;
switch (a){
    case 1:
        console.log("This is case1")
        break;
    case 2: 
        console.log("This is case 2")
        break;
    default:
        console.log("This is default case")
}

//Q3 Write a Js program to find whether a number is divisible by 2 and 3 
//Q4 '' 2 or 3
let num = 27

console.log((num%2==0 && num%3==0)? "it is divisible":" not divisible ")
console.log((num%2==0 || num%3==0)? "it is divisible":" not divisible ")

//Q5 Print "you can drive" or "You cannot drive" based on age greater than 18

age=21
if( age>=18){
    console.log("you can drive")
}
else{
    console.log("You cannot drive")
}

// same using ternary operator

console.log((age>=18)? "you can drive":"You cannot drive")
