let shuffle = require("shuffle-array");
let readline = require("readline-sync");

// Copy over your card deck code. You will need that to be working in order
// to complete this exercise.

let deck = [];

for (let i = 1; i <= 13; i++) {
  for (let j = 1; j <= 4; j++) {
    let str = "";

    if (i >= 2 && i <= 10) {
      str += i + " of ";
    } else if (i == 1) {
      str += "A of ";
    } else if (i == 11) {
      str += "Jack of ";
    } else if (i == 12) {
      str += "Queen of ";
    } else if (i == 13) {
      str += "King of ";
    }

    if (j == 1) {
      str += "Clubs";
    } else if (j == 2) {
      str += "Diamonds";
    } else if (j == 3) {
      str += "Spades";
    } else if (j == 4) {
      str += "Hearts";
    }

    deck.push(str);
  }
}
//console.log(deck);

// 1. Shuffle the deck. This was explained in memory.js.
let shuffledCards = shuffle(deck);
console.log(shuffledCards);

// 2. Deal a "hand" of seven cards to a player.
// This means there should be a new array called hand that contains 7 cards, and
// those cards should no longer be in the deck.
let hand = [];

for (cardIndex = 0; cardIndex < 7; cardIndex++) {
  hand[cardIndex] = shuffledCards.shift();
}

// Print both of them out to make sure.
console.log(shuffledCards);
console.log(hand);

// 3. Count how many of each value are in the hand. For example, if the hand ends
// up with Aceclubs, 2hearts, 2diamonds, 4spades, 5hearts, Jdiamonds, Kclubs ...
// Your code should print out something like:
// 1 Ace, 2 2s, 1 4, 1 5, 1 jack and 1 king.

// 4. If you get that working, try doing this with two hands at the same time.
// 5. If you get that working, create a function called hasTwoPair that takes in
// an array called hand and returns a boolean indicating whether or not that hand
// contains exactly two of any value. My example above would return true
// because it has two 2's. But a hand with 7 different cards would return false.
