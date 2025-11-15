//Q1 What will the following print in Js
console.log("som\"".length);
// som"

//Q2 Explore the includes, start with and ends with functions of a string
const sentence='The quick brown fox jumps over the lazy dog.';
const word='fox';
console.log(`The word "${word}" ${sentence.includes(word)? "is": "is not"} in the sentence`)

//Q3 WAP to convert a given string to lowercase
let st = "SOHAM"
let a=st.toLowerCase();
console.log(a);

//Q4 Extract the amount out of this string "Please give Rs 1000"

let exstr="Please give Rs 1000";

let amount= exstr.slice("Please give Rs".length);
console.log(amount);

//Q5 Try to Change 4th Character of a given string were you able to do it?
//NO