// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

let readline = require("readline-sync");

// 1. Ask the user for a number and print whether it is positive or negative or zero.
let userNum = parseInt(readline.question("Please enter a number: "));

if (userNum > 0) {
  console.log(userNum + " is positive.");
}else if (userNum < 0) {
  console.log(userNum + " is negative.")
}else {
  console.log(userNum + " number is 0.");
}

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
let userNumOne = parseInt(readline.question("Please enter a number: "));
let userNumTwo = parseInt(readline.question("Please enter a second number: "));
let userNumThere = parseInt(readline.question("Please enter a third number: "));

Math.max(userNumOne, userNumTwo, userNumThere);
console.log("The biggest of your three numbers is " + Math.max(userNumOne, userNumTwo, userNumThere) + ".");

// 3. Ask the user for a number and print whether it is odd or even
let num = parseInt(readline.question("Please enter a number: "));

if (num % 2 == 0) {
  console.log(num + " is even.");
}else {
  console.log(Num + " is odd.");
}

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
let userLetter = readline.question("Please enter a letter: ");

if (userLetter == "a" || userLetter == "e" || userLetter == "i" || userLetter == "o" || userLetter == "u") {
  console.log(userLetter + " is a vowel.");
}else if (userLetter == "y") {
  console.log(userLetter + " is sometimes a vowel.")
}else if (userLetter == "b" ||userLetter == "c" || userLetter == "d" || userLetter == "f" || userLetter == "g" || userLetter == "h" || userLetter == "j" || userLetter == "k" || userLetter == "l" || userLetter == "m" || userLetter == "n" || userLetter == "p" || userLetter == "q" || userLetter == "r" || userLetter == "s" || userLetter == "t" || userLetter == "v" || userLetter == "w" || userLetter == "x" || userLetter == "z") {
  console.log(userLetter + " number is consonant.");
}else {
  console.log(userLetter + " number is symbol.");
}

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
let userYear = readline.question("Please enter a year: ");

if (userYear % 4 == 0) {
  console.log(userYear + " is a leap year.");
}else {
  console.log(userYear + " isn't a leap year.");
}

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
let userCitizen = readline.question("Have you been a citizen for at least 9 years (yes or no): ");
let userAge = parseInt(readline.question("Please enter your age: "));
let userResident = readline.question("Do you live in New York State (yes or no): ");

if (userCitizen == "yes") {
  if (userAge > 30) {
    if (userResident == "yes") {
      console.log("Nice! You can run for the senate in NY.");
    }else {
      console.log("Sorry, you cannot run for the senate in NY. Move to New York, then we'll talk.");
    }
  }else {
      console.log("Sorry, you cannot run for the senate in NY. Come back in " + (30 - userAge) + " years, then we'll talk.");
  }
}else if (userCitizen == "no") {
  console.log("Sorry, you cannot run for the senate in NY. You must be a US citizen for 9 years.");
}
// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
let userDay = parseInt(readline.question("Please enter a number: "));

switch (userDay) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;
}
