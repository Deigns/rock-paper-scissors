for (button of choiceButtons) {
    button.addEventListener("click", function() {
        playRound(button.previousSibling.textContent);
})};

function getComputerChoice() {
    let x = Math.random() * 100;
    if ( x < 33 ) {
    return "Rock";
    } else if ( 33 <= x && x <= 66) {
        return "Scissors";
    } else {
        return "Paper";
    }   
}

function playRound (playerChoice) {
    console.log(playerChoice);
    let computerChoice = getComputerChoice();

    function win () {
        resultText.textContent = "Player Won!";
        winCount++;
        winText.textContent = winCount;
    }

    function lose () {
        resultText.textContent = "Computer Won";
        lossCount++;
        lossText.textContent = lossCount;
    } 

    roundCount++;
    roundText.textContent = roundCount;

    if (computerChoice == playerChoice) {
        drawCount++;
        drawText.textContent = drawCount;
        resultText.textContent = "Tie"  
    }else if (computerChoice == "Rock") {
        if (playerChoice === "Scissors") {
            lose();
        } else {
            win();
        }
    }else if (computerChoice === "Paper") {
        if (playerChoice === "Scissors") {
            win();
        } else {
            lose();
        }
    }else {
        if (playerChoice === "Rock") {
            win();
        }else {
            lose();
        }
    }
}