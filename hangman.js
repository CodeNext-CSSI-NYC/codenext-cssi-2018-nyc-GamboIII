let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');

// This statement gives us all the 7 and 8 letter words from the list.
// Those seems like good lengths for hangman, but feel free to change it up.
let wordsToPickFrom = words.filter(word => word.length == randomInt(4, 12));

// Let's make a hangman game. Step 1 is to randomly choose a word from wordsToPickFrom
// Use the random-int package and pick a random index from wordsToPickFrom
secretWord = wordsToPickFrom[randomInt(0, wordsToPickFrom.length - 1)];
console.log(secretWord);
// We will use an array to track the letters that the user has guessed so far.
// At the start, for a seven letter word that array will look like this:
// ["_", "_", "_", "_", "_", "_", "_"]
// Go ahead and create this array using a for loop. Note that its length will
// depend on the length of the secret word, so you cannot just say 7 in the for loop.
// We will call this array tracker. Whenever the user guesses letters that are in the word,
// We will replace the underscores (_) with the letter. So if the word is musical
// and you guess u, this tracker should become ["_", "U", "_", "_", "_", "_", "_"]

tracker = [];
for (let i = 0; i < secretWord.length; i++) {
  tracker.push("_");
}

// Create a function called render that takes in the tracker array and prints it out nicely.
// When you print it out it should look like:
// _ U _ _ _ _ _
// (use join to make a string that looks like that)
// Call your functions with a few different tracker arrays to make sure it works
function render(arr) {
  console.log(arr.join(" "));
}

// The main part of the game is:
// Ask the user to guess a letter
// Use a for loop to go through the secret word string. Each time the letter the
// user guessed appears in that string, you should reveal the letter in the tracker array.
// After you fill in the letters in the tracker you should call the render
// function to print out the array.

// This should keep happening until all the letters have been revealed.
// To check that, you should write a function called isRevealed that takes in an
// array and returns whether or not all of the letters have been guessed.
// You can clear the console each time if you want to, but you don't need to.
function isRevealed(arr) {
  if (arr.join("").includes("_")) {
    return false;
  }
  return true;
}

function displayHangPost(num) {
  //     |---|
  //     |  ( )
  //     | --|--
  //     |  /\
  // --------

  let hangPost = "     |---|\n     |\n     |\n     |\n     |\n --------";
  let hangPostWithHead = "     |---|\n     |  ( )\n     |\n     |\n     |\n --------";
  let hangPostWithTorso = "     |---|\n     |  ( )\n     |   |  \n     |\n     |\n --------";
  let hangPostWithOneArm = "     |---|\n     |  ( )\n     | --|  \n     |\n     |\n --------";
  let hangPostWithTwoArms = "     |---|\n     |  ( )\n     | --|--\n     |\n     |\n --------";
  let hangPostWithOneLeg = "     |---|\n     |  ( )\n     | --|--\n     |  /\n     |\n --------";
  let hangPostWithTwoLegs = "     |---|\n     |  ( )\n     | --|--\n     |  / \\\n     |\n --------";

  switch (num) {
    case 0: console.log(hangPost);
    break;

    case 1: console.log(hangPostWithHead);
    break;

    case 2: console.log(hangPostWithTorso);
    break;

    case 3: console.log(hangPostWithOneArm);
    break;

    case 4: console.log(hangPostWithTwoArms);
    break;

    case 5: console.log(hangPostWithOneLeg);
    break;

    case 6: console.log(hangPostWithTwoLegs);
    break;
  }
}

let userWordGuess = "";
let userTries = 0;
let wordBank = [];
let wrongGuess = 0;

console.clear()
while (!isRevealed(tracker)) {
  displayHangPost(wrongGuess);
  render(tracker);

  if (!secretWord.includes(userWordGuess) && !wordBank.includes(userWordGuess) && userWordGuess.length == 1) {
    wordBank.push(userWordGuess);
  }
  console.log("Wrong letters: " + wordBank.join(", "));

  // User guesses a letter or the word itself and the tracker updates
  userWordGuess = readline.question("Guess a letter in the word or the word itself: ");
  for (let i = 0; i < secretWord.length; i++) {
    if (userWordGuess == secretWord[i]) {
      tracker[i] = userWordGuess;
    } else if (userWordGuess == secretWord) {
      tracker = userWordGuess.split();
    }
  }

  if (!secretWord.includes(userWordGuess)) {
    wrongGuess++;
  }
  userTries++;

  console.clear();

  if (wrongGuess == 6) {
    console.clear();
    displayHangPost(wrongGuess);

    tracker = secretWord.split();
    render(tracker);

    console.log("YOU LOSE");
  }
}

displayHangPost(wrongGuess);
render(tracker);
if (wrongGuess == 1) {
  console.log("INCREDIBLE!");
} else {
  console.log("Nice! It took you " + userTries + " tries!");
}

// Once you have a basic version working, here are some wrinkles you can add if you want:
// 1. Keep track of the user's incorrect guesses and end the game if they guess wrong
// too many times, even if they haven't solved the puzzle.
// 2. List out the letters the user has guessed, so that they can see what
// they are and don't guess them again.
// 3. You could make it more of a 2-player game by allowing someone else to type
// in the secret word at the beginning rather than selecting it randomly.
// If you do that, make sure to clear the console, so the guesser cannot see what was typed.
