//Author: Amadou Gamby
let readline = require("readline-sync");
// user will provide the coefficients
let a = parseInt(readline.question("Please enter length for side a: "));
let b = parseInt(readline.question("Please enter length for side b: "));
let c = parseInt(readline.question("Please enter length for side c: "));

if (((a ** 2) + (b ** 2)) == c ** 2) {
  console.log("Yes");
}else {
  console.log("No");
}
