function computerPlay() {

  let randomPossibility = ["ROCK", "PAPER", "SCISSORS"];

  let randomChoice = randomPossibility[Math.floor(Math.random() * randomPossibility.length)];

  return randomChoice;
}

let playerSelection = prompt("Select one between 'Rock', 'Paper' or 'Scissors'!!!").toUpperCase();


console.log(playerSelection);

let computerSelection = computerPlay();

console.log(computerSelection);

function singleRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
      console.log("Select again");
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
      console.log("You Lose!, Paper covered the Rock");
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      console.log("You Win!!!, Rock broke the Scissors");
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      console.log("You Win!!!, Paper covered Rock");
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
      console.log("You Lose!, Scissors cut the Paper");
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      console.log("You Lose!, Rock broke the Scissors");
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log("You Win!!!, Scissors cut the Paper")
  } else {
      console.log("Select one between 'Rock', 'Paper' or 'Scissors'!!!");
  }
}

singleRound(playerSelection, computerSelection);