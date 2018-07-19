console.clear();

// 1. Refer to the 2D array below to answer the questions that follow
let fruits = [
  ["apple", "banana", "grape"],
  ["peach", "raspberry", "papaya"],
  ["apricot", "cherry", "pineapple"],
  ["watermelon", "nectarine", "tangerine"],
  ["mango", "strawberry", "blueberry"]
];
// Which item is fruits[2][1]? Confirm your answer by printing it out.
console.log(fruits[2][1]);
// expected output: cherry

// Which are the row/column coordinates of tangerine? Confirm your answer by printing it out.
console.log(fruits[3][2]);

// Change apricot to kiwi. Print out the array to make sure it worked.
fruits[2][0] = "kiwi";
console.log(fruits[2][0]);

// Create a new row to add to the end of the 2D array.
// This row will itself by an array and should contain blackberry, lemon, and clementine.
// Add it to the end of the fruits array. Print out the whole array to make sure
// your new row looks just like any other row.
fruits.push(["blackberry", "lemon", "clementine"]);
console.log(fruits);

// What is the row/column of lemon? Print it out to make sure.
console.log(fruits[5][1]);

// 2. Write two nested for loops. The first (outer) should run 4 times and
// the second (inner) should run 7 times.
// Inside the inner loop, print out the sentence:
// Right now, i is _____ and j is ____, filling in the blanks with the values.
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 7; j++) {
    console.log("Right now i is " + i + " and j is " + j + ".");
  }
}

// Before you run it, predict what the second line that your code prints will be.
// Write it down.... Now run it. Is it what you predicted?

// 3. Use two nested loops to iterate (go through) the fruits array above.
// Inside the loops, print out the item at that particular row/column.
// Which item do you think will be printed second-to-last? Run the code to check.
for (let row = 0; row < fruits.length; row++) {
  for (let col = 0; col < fruits[row].length; col++) {
    console.log(fruits[row][col]);
  }
}

// 4. Create your own 2D array. It doesn't have to be too big, but it should
// have at least two rows and at least two columns, and at least 6 items overall.
// Print out a few values from your 2D array using the rol/column indexes.
// Make sure that what gets printed matches your expectations.
// Try changing a few values in the 2D array using row/column indexes.
// Print it out to make sure that your changes worked as intended.
var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(items[0][0]);
console.log(items);

// 5. Write a function that takes in a 2D - array and a string as input.
// The function should return true if the string is found somewhere in the array, and false otherwise.
// Test it using the fruits array, including case with fruits that are there
// and other cases with fruits that are not.
function isStringThere(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].includes(str)) {
        return true;
      }
    }
  }
  return false;
}

console.log(isStringThere(fruits, "apple"));
console.log(isStringThere(fruits, "coconut"));
