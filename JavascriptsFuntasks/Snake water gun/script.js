
function playGame() {
    let user = document.getElementById("userInput").value.toLowerCase();
    let arr = ['s', 'w', 'g'];
    let cpuChoice = arr[Math.floor(Math.random() * 3)];

    document.getElementById("result").innerText = "You chose: " + user;
    document.getElementById("cpu").innerText = "CPU chose: " + cpuChoice;

    let output = "";

    if (user === cpuChoice) {
        output = "It's a Draw!";
    } 
    else if (user === 's' && cpuChoice === 'w') {
        output = "You Win! Snake drinks Water.";
    }
    else if (user === 's' && cpuChoice === 'g') {
        output = "You Lose! Gun kills Snake.";
    }
    else if (user === 'w' && cpuChoice === 's') {
        output = "You Lose! Snake drinks Water.";
    }
    else if (user === 'w' && cpuChoice === 'g') {
        output = "You Win! Water rusts Gun.";
    }
    else if (user === 'g' && cpuChoice === 's') {
        output = "You Win! Gun kills Snake.";
    }
    else if (user === 'g' && cpuChoice === 'w') {
        output = "You Lose! Water rusts Gun.";
    }
    else {
        output = "Invalid input! Please enter S, W, or G.";
    }

    document.getElementById("winner").innerText = output;
}