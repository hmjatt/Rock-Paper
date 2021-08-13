function computerPlay() {
  let randomPossibility = ["ROCK", "PAPER", "SCISSORS"];
  let randomChoice = randomPossibility[Math.floor(Math.random() * randomPossibility.length)];
  return randomChoice;
}

function getPlayerSelection(a) {
  a = prompt("Select one between 'Rock', 'Paper' or 'Scissors'!!!").toUpperCase();  
  return a;
}

function getComputerSelection(b) {
  b = computerPlay();
  return b;
}

let computerScore = 0;
let playerScore = 0;

function playSingleRound() {

  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerSelection();

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
      console.log("Select again");
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
      console.log("You Lose!, Paper covered the Rock");
      computerScore += 1; // run computerScored fxn
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      console.log("You Win!!!, Rock broke the Scissors");
      playerScore++; // run playerScored fxn
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      console.log("You Win!!!, Paper covered Rock");
      playerScore++;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
      console.log("You Lose!, Scissors cut the Paper");
      computerScore += 1;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      console.log("You Lose!, Rock broke the Scissors");
      computerScore += 1;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
      console.log("You Win!!!, Scissors cut the Paper");
      playerScore++;
  } else {
      console.log("Select one between 'Rock', 'Paper' or 'Scissors'!!!");
  }
  console.log(playerScore,computerScore);
}

function game() {
  for (let i = 0; i < 5; i++){
    playSingleRound();
  }
}

game();

if (playerScore > computerScore) {
  console.log("Player Won!!!");
} else if (computerScore > playerScore) {
    console.log("Computer Won!!!");
} else {
    console.log("Looks like its a tie");
}