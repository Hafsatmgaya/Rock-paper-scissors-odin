console.log("Hello World");
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
console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt("Enter your choice");
    return input.toLowerCase();
}
console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();


if (humanChoice === computerChoice){
    console.log("It is a tie");
}
else if 
 (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
) 
{
    console.log("You win!")
}
else {
    console.log("You lose!")
}
}
console.log(`You win! ${humanChoice} beats ${computerChoice}`);{
        humanScore++;
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`); {
        computerScore++;
    }
}

function playgame() {
    playground()
}