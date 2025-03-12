//map returns back new array of same length

var users = ["vraj","dhwanit","param","charan","rahul","priya","jiya"];

var x = users.map((user) => {
    return user.toUpperCase();
})

console.log(x);
