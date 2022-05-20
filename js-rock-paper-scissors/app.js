//possible choices
const possibleChoices = ["rock", "paper", "scissors"];
//select the values and buttons
const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const currentChoice = e.currentTarget.classList;
        console.log(currentChoice);
        if (currentChoice.contains("paper")) {
            userChoice.textContent = currentChoice[1];
        } else if (currentChoice.contains("rock")) {
            userChoice.textContent = currentChoice[1];
        } else {
            userChoice.textContent = currentChoice[1];
        }

        let fortuneChoice = getRandomNumber();
        computerChoice.textContent = getComputersChoice(fortuneChoice);

        let result = gameResult(userChoice.textContent, computerChoice.textContent);
        resultDisplay.textContent = result;
    });
});

function getComputersChoice(choice) {
    return possibleChoices[choice];
}

function getRandomNumber() {
    return Math.floor(Math.random() * possibleChoices.length);
}

function gameResult(_userChoice, _computerChoice) {
    console.log(_userChoice, _computerChoice);
    let result;
    if (!_userChoice.localeCompare(_computerChoice)) {
        result = "draw";
    } else if (_userChoice == "paper" && _computerChoice == "rock") {
        result = "win";
    } else if (_userChoice == "scissors" && _computerChoice == "paper") {
        result = "win";
    } else if (_userChoice == "rock" && _computerChoice == "scissors") {
        result = "win";
    } else {
        result = "lose";
    }

    return result;
}