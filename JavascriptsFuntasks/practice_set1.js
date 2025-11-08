//Q1 Create a variable of type string and try to add a number to it
let a = "soham"
let num=3;
let ans = a+num;
console.log(ans);

//Q2 Use type of operator to find the datatype of the string in last question

console.log(typeof(ans));

//Q3 Create a const object in js can you change it to hold a number later 

const fam={
    myname : "som"
}
//fam =3 not possible
console.log(fam["myname"]);
fam["myname"]=30;
console.log(fam["myname"]);
//yes

//Q4 Try to add a new key to the const object in problem 3 were you able to do it

fam["myage"]=20
console.log(fam);
//yes

//Q5 Write a Js program to create a word meaning dictionary of 5 words

const dictionary={
    Alacrity : "Eagerness or a cheerful readiness.",
    Benevolent : "Well-meaning and kindly.",
    Ephemeral : "Lasting for a very short time.",
    Paradigm : " A standard or typical example of a concept or thing.",
    Serene:"Calm and peaceful."
}
console.log(dictionary["Alacrity"]);
console.log(dictionary["Serene"]);