//filter returns back array which maybe of different length

var users = ["vraj","dhwanit","param","charan","rahul","priya","jiya"];

// var x = users.filter((user) => {
//     return user.length > 4;
// })

// console.log(x);

var deletename = users.filter((user) => user != "jiya");

console.log(deletename);
