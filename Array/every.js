var users = ["vraj","dhwanit","param","charan","rahul","priya","jiya"];

// var x = users.every((user) => {
//     return user.startsWith("p");
// }) 

// console.log(x);

//OR

var x = users.every((user) => user.startsWith("p"));

console.log(x);

//this is false coz not every name starts with p
//some and every will. return only boolean values