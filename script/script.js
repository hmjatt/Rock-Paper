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
  const CHOICES = ["rock", "paper", "scissors"];
  let randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return randomChoice;
}

function game(playerChoice) {
  let computerChoice = getComputerChoice();

  console.log(playerChoice + "  |  " + computerChoice);
  
  switch (playerChoice + computerChoice) {
    // Cases where player wins
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("Player Wins!");
      break;
    // Cases where Computer wins
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("Computer Wins!");
      break;
    // Cases where its a Tie
    case "rockrock":
    case "paperpaper":
    case  "scissorsscissors":
      console.log("It's a Tie!!!");
      break;
  }
  
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


