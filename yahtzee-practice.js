let randomInt = require("random-int");

// Read about Yahtzee at https://en.wikipedia.org/wiki/Yahtzee
// It will help if you have a basic idea of how the game works.

// 1. Write a function that rolls a single six-sided die and returns the result.
function rollDie() {
  return randomInt(1, 6);
}

// 2. Write a function that rolls five separate dice and returns the result in an array.
// This function should in turn call the function from #1 above.
function rollFiveDice() {
  let fiveDiceArray = [];

  for (roll = 0; roll < 5; roll++) {
    fiveDiceArray[roll] = rollDie();
  }
  return fiveDiceArray;
}
// An example return value is [2,3,5,1,2];
//console.log(rollFiveDice());

// 3. Write a function that takes in an array of five dice rolls and returns an
// object in which the keys are the rolls and the values are the frequency of the rolls.
// So if the array passed in is [2,3,5,1,2], then the return from this function is:
// {2: 2, 3: 1, 5: 1, 1: 1} because two appears twice and 1/3/5 appear once.
function createCounts(arr) {
  let numberFrequency = {};

  for (let i = 0; i < arr.length; i++) {
    let rollNum = arr[i];

    if (numberFrequency[rollNum] == undefined) {
      numberFrequency[rollNum] = 1;
    } else {
      numberFrequency[rollNum]++;
    }
  }

  return numberFrequency;
}

// You should test out this function by first calling the function in #2,
// storing the result in a variable, then calling this function and passing in that
// variable as the input to this function.
//console.log(createCounts(rollFiveDice()));

// Note: I will refer to the object returned by #3 above as a "counter object"
// from here on out. I will be referring to it a lot. A "counter object" has keys
// that are the numbers of the dice, and values that represent how many of the five
// dice rolled that number. So the values should always add up to 5.

// 3b. Write a function isValid that takes in a counter object and checks that the values add up to 5.
// It should return true or false. For example, if you pass in {2: 2, 3: 1, 5: 1, 1: 1}
// it should return true, but {2: 2, 3: 1, 5: 1, 1: 2} should return false.
// Feel free to use this function anywhere else in the code if you'd like.
function isValid() {
  rollArr = Object.values(createCounts(rollFiveDice()));
  sumOfRolls = 0;

  for (let i = 0; i < rollArr.length; i++) {
    sumOfRolls += rollArr[i];
  }

  if (sumOfRolls != 5) {
    return false;
  } else {
    return true;
  }
}

//console.log(createCounts(rollFiveDice()));
//console.log(isValid());

// 4. Write a function that determines whether or not a counter object contains
// a two-of-a-kind. This means that at least one of the counts is 2 or higher.
function hasTwoOfAKind(obj) {
  arrOfValues = Object.values(obj);

  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] == 2) {
      return true;
    }
  }
  return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
//console.log(hasTwoOfAKind({1:2, 2:1, 4:1, 6:1}));
//and make sure it says true.

// 5. Write a function that determines whether or not a counter object contains
// a three-of-a-kind. This means that one of the counts is 3 or higher.
function hasThreeOfAKind(obj) {
  arrOfValues = Object.values(obj);

  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] == 3) {
      return true;
    }
  }
  return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
//console.log(hasThreeOfAKind({1:3, 2:1, 6:1}));
//and make sure it says true.

// 6. Write a function that determines whether or not a counter object contains
// a four-of-a-kind. This means that one of the counts is 4 or higher.
function hasFourOfAKind(obj) {
  arrOfValues = Object.values(obj);

  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] == 4) {
      return true;
    }
  }
  return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
//console.log(hasFourOfAKind({1:3, 6:1}));
//and make sure it says false and make another
// one that does have it.

// 7. Write a function that determines whether or not a counter object contains
// a yahtzee (all five are the same). This means that one of the counts is 5.
function hasYahtzee(obj) {
  arrOfValues = Object.values(obj);

  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] == 5) {
      return true;
    }
  }
  return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
//console.log(hasYahtzee({1:4}));
//and make sure it says true.

// 8. Write a function that determines whether or not a counter object contains
// a full house. This means that one of the counts is 3 and a different one is 2.
function hasFullHouse(obj) {
  return hasThreeOfAKind(obj) && hasTwoOfAKind(obj);
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
//console.log(hasFullHouse({1:3, 5:2}));
//and make sure it says true.

// 9. Write a function that determines whether or not a counter object contains
// a small straight. This means that either all of the values from 1-4 appear at least once,
// or all the values from 2-5 appear at least once, or all the values from 3-6 appear at least once.
function hasSmallStraight(obj) {
  arrToString = "";
  sortedArrOfKeys = Object.keys(obj).sort();

  for (let i = 0; i < sortedArrOfKeys.length; i++) {
    arrToString += sortedArrOfKeys[i];
  }

  if (arrToString == "1234" || arrToString == "2345" || arrToString == "3456") {
    return true;
  }
  return false;
}
//console.log(hasSmallStraight({2:1, 3:1, 4:2, 5:1}));

// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({3:1, 4:1, 5:2, 6:1}) and make sure it says true.

// 10. Write a function that determines whether or not a counter object contains
// a large straight. This means that either all of the values from 1-5 appear at least once,
// or all the values from 2-6 appear at least once.
function hasLargeStraight(obj) {
  arrOfKeys = Object.keys(obj);

  if (arrOfKeys.length == 5 && (Math.max(...arrOfKeys) - Math.min(...arrOfKeys) == 4)) {
    return true;
  }

  return false;
}

//console.log(hasLargeStraight({1:1, 2:1, 3:1, 4:2, 5:1}));
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({2:1, 3:1, 4:1, 5:1, 6:1}) and make sure it says true.
