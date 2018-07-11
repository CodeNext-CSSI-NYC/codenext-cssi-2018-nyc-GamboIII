let readline = require("readline-sync");
// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.
let userChoice = readline.question("Type in 'fruit' or 'veggie': ");

if (userChoice == "fruit") {
  let userChoiceFruit = readline.question("Type 'a' or 'b': ");
  if (userChoiceFruit == "a") {
    console.log("Apples sound good right about now.");
  }else if (userChoiceFruit == "b") {
    console.log("Bananas sound good right about now.");
  }else {
    console.log("No fruits, then, I guess.");
  }
}else if (userChoice == "veggie") {
  let userChoiceVeggie = readline.question("Type 'm' or 'p': ");
  if (userChoiceVeggie == "m") {
    console.log("Mushrooms sound good right about now.");
  }else if (userChoiceVeggie == "p") {
    console.log("Peppers sound spicy right about now.");
  }else {
    console.log("Somebody's picky, aren't they?");
  }
}else {
  console.log("Fine, eat donuts for the rest of your life, then.");
}

// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s
let userChoiceTwo = readline.question("Type in 'square' or 'rectangle': ");

if (userChoiceTwo == "square") {
  let userChoiceSq = readline.question("Would you like the formula for the area or perimeter of a square?: ");
  if (userChoiceSq == "perimeter") {
    console.log("The formula for the perimeter of a square is 4 * length");
  }else if (userChoiceSq == "area") {
    console.log("The formula for the area of a square is length * length.");
  }else {
    console.log("Fine, you must be an extra kind of stupid to need a calculator for area and perimeter. Ciao, nimrod");
  }
}else if (userChoiceTwo == "rectangle") {
  let userChoiceRect = readline.question("Would you like the formula for the area or perimeter of a rectangle?: ");
  if (userChoiceRect == "perimeter") {
    console.log("The perimeter of a rectangle is 2 * length + 2 * width.");
  }else if (userChoiceRect == "area") {
    console.log("The area of a rectangle is length * width.");
  }else {
    console.log("I've never really liked math either. Bye.");
  }
}else {
  console.log("I was never a big fan of quadrilaterals, anyway. Bye.");
}

// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
//     if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.
