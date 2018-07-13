// 1a. Use a while loop to print out numbers from 1 to 10
// 1b. Use a while loop to print out numbers from 30 to 15
let countFrom1To10 = 0
while (countFrom1To10 <= 10) {
  console.log(countFrom1To10);
  countFrom1To10++;
}

let countFrom30To15 = 30
while (countFrom30To15 >= 15) {
  console.log(countFrom30To15);
  countFrom30To15--;
}

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.
let diceRollof5;
while (diceRollof5 != 5) {
  diceRollof5 = Math.round(Math.random() *  6);
  console.log(diceRollof5);
}

// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.
let readline = require("readline-sync");
let myPassword = "password";
let userTries = 0;

let userInput = readline.question("Enter password: ");
while (userInput != myPassword && userTries < 3) {
  userInput = readline.question("Wrong password! Enter password: ");
  userTries++;
  console.log("Wrong password! You have " + (3 - userTries) + " tries left.");

  if (userTries == 3) {
    console.log("Sorry! This computer is now locked permantly.");
  }
}

if (userInput == myPassword) {
  console.log("Access granted!");
}

// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.
