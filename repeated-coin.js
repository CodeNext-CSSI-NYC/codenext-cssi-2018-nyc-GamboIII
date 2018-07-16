// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.

let headCount = 0;
let tailCount = 0;

for (flipNumber = 0; flipNumber < 100; flipNumber++) {
  if (Math.round(Math.random()) == 0) {
    headCount++;
  } else {
    tailCount++;
  }
}
console.log("The coin landed on heads " + headCount + " times and on tails " + tailCount + ".");
