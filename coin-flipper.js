let readline = require("readline-sync");

let flip;
let min = 0;
let max = 1;
let num = Math.random() * (max - min) + min;

if (flip < .5) {
  flip = "heads";
}else {
  flip = "tails";
}

let userGuess = readline.question("A coin has been flipped. Guess whether it's heads or tails: ");

if (userGuess == flip) {
  console.log("Spot on! The coin landed on " + flip + ".");
}else if (userGuess != flip) {
  console.log("Too bad. The coin landed on " + flip + ".");
}
