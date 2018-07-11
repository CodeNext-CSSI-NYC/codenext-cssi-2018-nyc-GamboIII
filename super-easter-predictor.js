// Author: Amadou Gamby
let readline = require("readline-sync");
console.log("bLeep blOop! i'm yOuR WorST niGhTMarE!");

//user enters amount of change
let change = parseInt(readline.question("Please enter cents as a positive integer: "));
console.log(change + "cents makes:");
console.log(Math.floor(change / 25) + "quarters");
