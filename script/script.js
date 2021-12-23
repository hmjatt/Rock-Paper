let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.getElementById("scoreboard");
let result_div = document.getElementById("result");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let gameCount_span = document.getElementById("game-count-span");
let gameCounts = gameCount_span.innerHTML;
gameCounts = 5;
let msg = "";




function getComputerChoice() {
  const CHOICES = ["Rock", "Paper", "Scissors"];
  let randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return randomChoice;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  gameCounts = 5;
  gameCount_span.innerHTML = gameCounts;
  result_div.innerHTML = "Make a move";
}

function winner() {

  switch(true) {
    case playerScore > computerScore:
      msg = "Player Won this Game";
      break;
    case playerScore < computerScore:
      msg = "Computer Won this Game";
      break;
    case playerScore == computerScore:
      msg = "This game is a Tie"
      break;
  }
}

function gameEnd() {
 
    let text = msg;
    if (confirm(text) == true) {
      reset();
    } else {
      reset();
    }
}

function gameCount () {
  
  
  if(gameCounts > -2) {
    gameCounts -= 1;
    gameCount_span.innerHTML = gameCounts;
    
    if(gameCounts == 0) {
      winner()
    }
    if(gameCounts == -1) {
        // run a fxn that resets the game and shows a button
        gameEnd();
    }
  }
  
}                                                    

function playerWins(player, computer) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  result_div.innerHTML = `${player} beats ${computer}. Player Wins!`
}

function computerWins(player, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${computer} beats ${player}. Computer Wins!`
}

function draw() {
  result_div.innerHTML = "It's a Tie!!!";
}


function game(playerChoice) {
  let computerChoice = getComputerChoice();
  
  switch (playerChoice + computerChoice) {
    // Cases where player wins
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      playerWins(playerChoice, computerChoice);
      break;
    // Cases where Computer wins
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      computerWins(playerChoice, computerChoice);

      break;
    // Cases where its a Tie
    case "RockRock":
    case "PaperPaper":
    case  "ScissorsScissors":
      draw(playerChoice, computerChoice)
      break;
  }
  gameCount();
  
}

function main() {
  rock_div.addEventListener("click", function() {
    game("Rock");
  });

  paper_div.addEventListener('click', function() {
    game("Paper");
  });

  scissors_div.addEventListener('click', function() {
    game("Scissors");
  });

}

main();


