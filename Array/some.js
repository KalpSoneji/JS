var users = ["vraj","dhwanit","param","charan","rahul","priya","jiya"];

// var flag = true;

// for(i=0; i<users.length; i++){
//     if(users[i].length < 5){
//         flag = false;
//     }
// }

// console.log(flag);

//OR

var x = users.some((user) => {
    return user.length < 5;
})

console.log(x);

//OR

// var x = users.some((user) => user.length < 5); 

// console.log(x);

// this will return true if any of the user name is less than 5 else it will return false.