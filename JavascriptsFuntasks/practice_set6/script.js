//Q1 write a programe using prompt function to take input of age as a value from the user 
// and use alert to tell him if he can drive or not 
let age = Number.parseInt(prompt('enter your age :'))
if(age>=18){
    alert('you can drive')

}
else{
    alert('you cannot drive')
}



//Q2 in q1 use confirm to ask the user if he wants to see the prompt again
//Q3 In the previous questionuse console.error to log the error if age is negetive

// let runAgain=true;
// while(runAgain){
//     let inp = parseInt(prompt("What is your age:"));

//     if (inp < 18) {
//         alert("You cannot drive, broski!");
//     } else {
//         alert("You can drive, Yeah!");
//     }
//     runAgain=confim('Do you want to go again ?');

// }

//change the background of the page to yellow red or any other color based on user input through prompt

// let color=prompt('Enter a color');
// document.body.style.background=color;

//Write a program to change the url to google.com if user enters a number greater than 4 
// let redir=Number.parseInt(prompt('enter a number'))
// if(redir>4){
//     location.href="http://google.com"
// }
