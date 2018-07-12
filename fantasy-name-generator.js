// Author: Amadou Gamby
let readline = require("readline-sync");

/****************************************************************************** getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/
function getNewFirstName(firstName, lastName) {
    return firstName.substr(0, 3) + lastName.substr(0, 2);
}

/****************************************************************************** getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/
function getNewLastName(momMaidenName, cityBorn) {
  return momMaidenName.substr(0, 2) + cityBorn.substr(0, 3);
}

/****************************************************************************** getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/
function getTitle(lastName, dreamCar) {
  return lastName.charAt(lastName.length - 3) + lastName.charAt(lastName.length - 2) + lastName.charAt(lastName.length - 1) + dreamCar;
}

/****************************************************************************** getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/
function getHonorific(title, street) {
  return ge + " of " + 
}




/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions and store the answers in different variables.
  It should then call the functions above, passing in the right parameters,
  to produce the user's fantasy name. Create a variable called fantasyName
  to hold the results, and display it for the user to see.
*******************************************************************************/
function run() {

}




// Run the program!
run();
