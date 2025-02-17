function Goa(name, amount){
    return name + " has to pay " + amount + " for Goa";
}

function USA(name, amount){
    return name + " has to pay " + amount + " for USA";
}

function UK(name, amount){
    return name + " has to pay " + amount + " for UK";
}

var name = prompt("Enter name");
var budget = prompt("Enter budget");
var final;

if(budget > 800){
    final = UK(name, budget);
}

else if(budget > 600){
    final = USA(name, budget);
}

else if(budget > 400){
    final = Goa(name, budget);
}

else{
    console.log("Start earning");
}

console.log(final);

//name is deprecated keyword