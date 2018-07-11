let readline = require("readline-sync");

const compNum = Math.random() * 3
let compChoice;

if (compNum >= 0 && compNum < 1){
  compChoice = "rock";
}else if (compNum >= 1 && compNum < 2){
  compChoice = "paper";
}else if (compNum >= 2 && compNum < 3){
  compChoice = "scissors";
}

console.log("The computer challenges you to a game of RPS!");
let userChoice = readline.question("Choose rock, paper, or scissors: ");

switch (true) {
  case (userChoice == compChoice):
    console.log("Tie!");
    break;

  case (userChoice == "rock" && compChoice == "paper"):
    console.log("The computer chose paper. The computer wins!");
    break;

  case (userChoice == "paper" && compChoice == "scissors"):
    console.log("The computer chose scissors. The computer wins!");
    break;

  case (userChoice == "scissors" && compChoice == "rock"):
    console.log("The computer chose rock. The computer wins!");
    break;

  case (compChoice == "rock" && userChoice == "paper"):
    console.log("The computer chose paper. You win!");
    break;

  case (compChoice == "paper" && userChoice == "scissors"):
    console.log("The computer chose scissors. You win!");
    break;

  case (compChoice == "scissors" && userChoice == "rock"):
    console.log("The computer chose rock. You win!");
    break;
}
