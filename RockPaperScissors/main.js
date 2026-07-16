function getComputerChoice() {
  let probability = Math.random();

  if (probability < 0.3) {
    return "rock";
  } else if (probability >= 0.3 && probability < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("WHat's your choice?");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice, computerScore, humanScore) {
  if (humanChoice == computerChoice) {
    console.log("It was a draw");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors");
    computerChoice++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerChoice++;
  } else {
    console.log("You win!");
    humanScore++;
  }
}

function playGame() {
  let humanSelection;
  let computerSelection;

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, computerScore, humanScore);
  }

  if (humanScore > computerScore) {
    console.log("You win this game");
  } else {
    console.log("You lost this game");
  }
}

console.log(playGame());
