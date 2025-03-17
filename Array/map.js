//map returns back new array of same length

var users = ["vraj","dhwanit","param","charan","rahul","priya","jiya"];

// var x = users.map((user) => {
//     return user.toUpperCase();
// })

// console.log(x);

var newArray = [];
users.forEach((user) => {
    newArray.push(user);
})

console.log(newArray);
