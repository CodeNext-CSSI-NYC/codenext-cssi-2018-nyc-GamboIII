let readline = require("readline-sync");

let userNum = parseFloat(readline.question("Please enter a number: "));
if (userNum % Math.sqrt(userNum) == 0) {
  console.log(userNum + " is a a perfect square and its root is " + Math.sqrt(userNum) + ".");
}else {
  console.log(userNum + " isn't a perfect square.");
}
