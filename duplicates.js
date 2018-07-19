// 1. Another way to use nested loops is to loop through the same array twice.
// One reason you might do this is to try to figure out if the array has any duplicates.
// The outer loop would track one item in the array, and the inner loop would
// go through all of the items in the array and check if they are the same as
// that first item. If so, the array contains at least one duplicate.
// But make sure you don't compare an item to itself, because that's not a duplicate.

// Get a basic version of this working. You should return true if there is at least one duplicated value.
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        return true;
      }
    }
  }
  return false;
}
// Here are some examples you can use to test
let arr1 = [3,4,5,6,7,1,2,5,9];
let arr2 = ["apple", "banana", "pear", "banana"];
let arr3 = ["apple", "banana", "pear", "orange"];
let arr4 = [3,4,5,6];

console.log(hasDuplicate(arr1));
console.log(hasDuplicate(arr2));
console.log(hasDuplicate(arr3));
console.log(hasDuplicate(arr4));

// Also make some examples where the answer is false

// 2. Once you have this version working, make a different version that
// tells you which items in the array are duplicated.
// For example, in [3,4,5,6,7,1,2,5,9] the only duplicate is 5
// However, in [3,4,5,4,7,4,2,5,9] the duplicates are 5 and 4 (which appears three times)
function listDuplicates(arr) {
  let arrOfDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        arrOfDuplicates.push(arr[j]);
      }
    }
  }
  return arrOfDuplicates;
}

console.log(listDuplicates([3,4,5,4,7,4,2,5,9]));
console.log(listDuplicates(arr2));
console.log(listDuplicates(arr3));
console.log(listDuplicates(arr4));

// Bonus:
// 3. A related question (though one that has nothing to do with nested loops)
// is to find the mode (the item that appears most often) of an array.
// Write a function that does that.
function findMode(arr) {
  let letterFrequency = {};

  for (let i = 0; )
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letterFrequency[letter] == undefined) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter]++;
    }
  }

  return letterFrequency;
  }
}
// If you test with [3,4,5,4,7,4,2,5,9] it should return 4.
// If it's a case where multiple items appear the most, you can decide to either
// return just one of them, or to return all of them.
// For example [3,4,5,4,7,3,2,5,9] has three values that appear most: 3, 4, and 5.
