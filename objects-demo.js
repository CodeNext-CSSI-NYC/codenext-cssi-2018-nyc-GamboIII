let str = "apple banana carrot dill eggplant";
let letterCounter = {};

for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (letterCounter[letter] == undefined) {
    letterCounter[letter] = 1;
  } else {
    letterCounter[letter]++;
  }
}

console.log(letterCounter);

// array of the keys
let letters = Object.keys(letterCounter);
console.log(letters);

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  let count = letterCounter[letter];
  console.log("The letter " + letter + " appeared " + count + " times");
}
