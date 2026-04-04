function getComputerChoice() {
    let random = Math.random();
    if(random < 0.33){
        return "rock"
    } else if (random < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock");
});
document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper");
});
document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors");
});
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("You lost the game!");
} else {
    console.log("The game is a tie!");
}
}  

playGame();