var gender = prompt("Enter gender: ");
var color = prompt("Enter color: ");
var final;

const whitemale = (gender, color) => color + " " + gender + " You got all rights";
const brownmf = (gender, color) => color + " " + gender + " You got some rights";
const blacks = (gender, color) => color + " " + gender + " You got no rights";

if (gender == "male" && color == "white") 
    final = whitemale(gender, color);
 
else if (((gender == "male" || gender == "female") && color == "brown") || (gender == "female" && color == "white"))
    final = brownmf(gender, color);
 
else if ((gender == "male" || gender == "female") && color == "black") 
    final = blacks(gender, color);
 
else 
    final = "Invalid input";

console.log(final);