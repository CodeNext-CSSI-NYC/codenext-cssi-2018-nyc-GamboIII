// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:
// Set a random number from 1 to 100 to be the answer.
// Ask the user to guess a number.
// If they're wrong, you should ask them to guess again.
// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.
let readline = require("readline-sync");
let randomInt = require('random-int')

let numberToGuess = randomInt(1, 100);
let userGuess = readline.question("Please guess a number between 1 to 100: ");
let counter = 1;

while (userGuess != numberToGuess) {
  if (userGuess < numberToGuess) {
    userGuess = readline.question("Your number was too low. You need to guess higher: ");
    counter++;
  } else if (userGuess > numberToGuess) {
    userGuess = readline.question("Your number was too high. You need to guess lower: ");
    counter++;
  }
}

console.log("Correct! It took you " + counter + " tries to guess " + numberToGuess + ".");
