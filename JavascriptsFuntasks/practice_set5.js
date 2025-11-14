//Q1 Create an array of number and take input from the user to add numbers to this array 

let arr=[7,56,8,4,3,5,7,8];
const prompt = require("prompt-sync")();

let inp=Number.parseInt(prompt("Enter the element to push into the array :"));

arr.push(inp);
console.log("New array is :",arr);

//Q2 Keep adding numbers to the array in 1 until 0 i added to the array 

let newarr=arr.reduce((h1,h2)=>{
    return h1 +h2;
})

console.log(newarr);

//Q3 Filter for numbers divisible by 7 from the given array

let a=arr.filter((num)=>{
    return num%7==0;
})

console.log(a);

//Q4 Create an array of square of given numbers 

let sq=arr.map((element)=>{
    return element**2
})
console.log(sq);

//Q5 Use reduce to calculate factorial of a given number from an array of first 
// n natural numbers (n being the number whose factorial needs to be calclated)
let input =Number.parseInt(prompt("Enter the number to find factorial : "));
let fact_arr=[];
while(input>0){
    fact_arr.push(input);
    input-=1;
}
let fact=fact_arr.reduce((b1,b2)=>{
    return b1*b2;
})
console.log(fact);