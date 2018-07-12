let readline = require("readline-sync");

let thousandsPlace;
let hundredsPlace;
let tensPlace;
let onesPlace;

let userNum = readline.question("Please enter an integer between 0 and 9999: ");

function wordForm(userNum) {
  if (userNum >= 1 && userNum < 10) {
    onesPlace = userNum % 10;
  }
  
  if (userNum >= 10) {
    tensPlace = Math.floor((userNum % 100) / 10);
  }

  if (userNum >= 100) {
    hundredsPlace = Math.floor((userNum % 1000) / 10);
  }

  if (userNum >= 1000) {
    thousandsPlace = Math.floor(userNum / 1000);
  }

}
