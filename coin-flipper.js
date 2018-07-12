let readline = require("readline-sync");

let flip;

if (Math.random() < .5) {
  flip = "heads";
}else {
  flip = "tails";
}

let userGuess = readline.question("A coin has been flipped. Guess whether it's heads or tails: ");

if (userGuess.lowerCase() == flip) {
  console.log("Spot on! The coin landed on " + flip + ".");
}else if (userGuess.lowerCase() != flip) {
  console.log("Too bad. The coin landed on " + flip + ".");
}
