let numToguess=Math.floor((Math.random() * 100) + 1);
const prompt = require("prompt-sync")();
let life =10;
let num;
function game(){
    num = Number.parseInt(prompt("Guess the number : "))

    if(num===numToguess){
        console.log('You got it!');
    }
    else if(num>numToguess){
        console.log("Too high. Try again.");
        life-=1
    }
    else if(num<numToguess){
        console.log('Too low. Try again.')
        life-=1
    }
}
while (life > 0) {
    game();
    if(num===numToguess){
        break;
    }
}
