//Write a program to print the marks of a student in an object using for loop
// obj={ram:98,sham:70,som:85}
//wap same in for in loop
const obje={ram:98,sham:70,som:85}
console.log(Object.keys(obje));

for(let i=0;i<Object.keys(obje).length;i++){
    console.log("The marks of",Object.keys(obje)[i],"are",obje[Object.keys(obje)[i]])
}


for (const key in obje){ 
    console.log(key)
    console.log(obje[key]);
}

// write a program to print "try again until" user enters correct number

const prompt = require("prompt-sync")();  // import prompt-sync
let num =4 ;
let inp =0;
while(inp!==num){
    inp = prompt("Guess the correct number to exit the loop : "); 
    inp=Number.parseInt(inp);
    if(inp!=num){
        console.log("Try again.");
    }
    else{
        console.log("You got it.");
    }
}


// Write a function to find mean of 5 numbers 

const Mean =(a,b,c,d,e)=>{
    let mean = (a+b+c+d+e)/5
    console.log("The mean of ",a,b,c,d,e,"is",mean)
}

Mean(4,5,6,7,8)

