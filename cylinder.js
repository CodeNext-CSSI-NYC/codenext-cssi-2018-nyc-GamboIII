// user will decide whether they want the voulme or surface area of a sphere or cylinder
let answer = parseInt(readline.question("Please enter 1 for the volume and surface area of a cylinder and 2 for that of a sphere: "));

// cylinder
if (answer == 1){
  // asks for height and radius
  let height = parseInt(readline.question("Please enter the height of the cylinder: "));
  let cylRadius = parseInt(readline.question("Please enter the radius of the cylinder: "));

  // formulas
  cylVolume = Math.PI * (cylRadius ** 2) * height;
  cylSurface = (2 * Math.PI * cylRadius * height) + (2 * Math.PI * (cylRadius ** 2));

  // user decides between voulme or surface area
  let cylAnswer = parseInt(readline.question("Please enter 1 for the volume and 2 for the surface area: "));

  //final
  if(cylAnswer == 1){
    console.log("The volume of your cylinder is " + cylVolume + " .");
  }else if (cylAnswer == 2) {
    console.log("The surface area of your cylinder is " + cylSurface + " .");
  }else {
    console.log("Your failure to comply with this program's instructions resulted in system failure. Go find another calculator or something");
  }
}else if(answer == 2){ //sphere
  let sphRadius = parseInt(readline.question("Please enter the radius of the cylinder: "));

  // formulas
  sphVolume = (4/3) * Math.PI * (sphRadius ** 3);
  sphSurface = 4 * Math.PI * (sphRadius ** 2);

  // user decides between voulme or surface area
  let sphAnswer = parseInt(readline.question("Please enter 1 for the volume and 2 for the surface area: "));

  //final
  if(sphAnswer == 1){
    console.log("The volume of your sphere is " + sphVolume + " .");
  }else if (sphAnswer == 2) {
    console.log("The surface area of your sphere is " + sphSurface + " .");
  }else {
    console.log("This is why we can't have nice things. Go read a book or something");
  }
}else {
  console.log("I'm pretty sure people only think you're bright because light is faster than sound. Bye.");
}
