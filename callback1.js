function main(){
    console.log("Hey there!");
}

function cb(x){
    x();
}

cb(main);

//OR

// function cb(x){
//     console.log(x);
    
// }

// cb("Noice");
// cb(true);
// cb({Name: "Kalp", Marks: 100, Presence: true});