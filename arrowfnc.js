const isEven = (x)=> x % 2 === 0;

let y = prompt("Enter a number");

var x = isEven(y);
console.log(x ? "Even" : "Odd");