const resultsDiv = document.querySelector("#results");
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie";
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } 
    else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    if (humanScore === 5) {
    resultsDiv.textContent = "🎉 You win the game!";
    return;
}

if (computerScore === 5) {
    resultsDiv.textContent = "💻 You lose the game!";
    return;
}
    }

