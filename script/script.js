let playerScore = 0;
let computerScore = 0;
let playerScorespan = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.getElementById("scoreboard");
let result_div = document.getElementById("result");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let gameCount_div = document.getElementById("gamecount");

function getComputerChoice() {
  const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return computerChoice;
}

function game(playerChoice) {
  console.log("computer choice = " + getComputerChoice());
  console.log("player choice = " + playerChoice);
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });

  paper_div.addEventListener('click', function() {
    game("paper");
  });

  scissors_div.addEventListener('click', function() {
    game("scissors");
  });

}

main();


