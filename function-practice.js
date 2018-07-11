// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function meow() {
  console.log("meow");
}

// 1b. Call it three times in a row. Run your code to make sure it works.
meow();
meow();
meow();

// 2a. Write (declare) a function that takes one parameter and prints out the square of that parameter
function squareMyNumber(num) {
  console.log(num ** 2);
}

// 2b. Call it three times with three different parameters. Run your code to make sure it works.
squareMyNumber(16);
squareMyNumber(9);
squareMyNumber(81);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
function greaterThan(num1, num2) {
  if (num1 != num2) {
    console.log(Math.max(num1, num2) + " is greater than " + Math.min(num1, num2));
  }else {
    console.log("The two number are equal.");
  }
}

// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are the same.
// Run your code to make sure it works.
greaterThan(5, 5);
greaterThan(94, 87);
greaterThan(23, 53);


// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____".
function helloName(name) {
  returns "Hello " + name + "."
}

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.



// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
