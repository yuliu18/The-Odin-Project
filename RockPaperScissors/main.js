const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
const MAX_ROUNDS = 5;
let round = 0;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
  if (beats[humanChoice] === computerChoice) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else if (beats[computerChoice] === humanChoice) {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
  } else {
    return "It's a tie!";
  }
}

function getFinalResult() {
  if (humanScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > humanScore) {
    return "You lost the game!";
  } else {
    return "The game is a tie!";
  }
}

const buttons = document.querySelectorAll(".choices button");
const resultDiv = document.getElementById("result");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanChoice = btn.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    round++;

    document.getElementById("score-player").textContent = humanScore;
    document.getElementById("score-computer").textContent = computerScore;
    
    if(round >= MAX_ROUNDS) {
      resultDiv.textContent = `${result}. ${getFinalResult()}`;
      buttons.forEach((btn) => btn.disabled = true);
    } else {
      resultDiv.textContent = `${result} (Ronda ${round}/${MAX_ROUNDS})`;
    }
  });
});