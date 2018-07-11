// Author: Amadou Gamby
let readline = require("readline-sync");

let x1 = parseInt(readline.question("Please enter the x-coordinate of your first point: "));
let y1 = parseInt(readline.question("Please enter the y-coordinate of your first point: "));
let x2 = parseInt(readline.question("Please enter the x-coordinate of your second point: "));
let y2 = parseInt(readline.question("Please enter the y-coordinate of your second point: "));

// midpoint coordinate
let midpointXCoord = (x1 + x2) / 2
let midpointYCoord = (y1 + y2) / 2

// distance between points
let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

// slope
let slope = (y2 - y1) / (x2 - x1);

// user options
let answer = parseInt(readline.question("Please enter 1 for the midpoint of the two points, 2 for the distance between the points, and 3 for the slope of the line between the two points: "));

if (answer == 1) {
  console.log("The midpoint of your two points is (" + midpointXCoord + ", " + midpointYCoord + ").");
}else if (answer == 2) {
  console.log("The distance between your points is " + distance + ".");
}else if (answer == 3) {
  console.log("The slope of the line between your points is " + slope + ".");
}
