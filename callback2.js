function lasvegas(data){
    console.log(data.fname + " confirm lasvegas with amount "+ data.amount);
}

function singapore(data){
    console.log(data.fname + " confirm singapore with amount "+ data.amount);
}

function bangkok(data){
    console.log(data.fname + " confirm bangkok with amount "+ data.amount);
}

//cb --- callback
function travel(name,amount,cb){
    cb({
        fname:name,
        amount:amount
    })
}

var budget = prompt("Enter your budget");

if(budget > 4000)
{
    travel("rahul",budget,lasvegas)
}
else if(budget > 3000)
{
    travel("rahul",budget,singapore)
}
else if(budget > 2000)
{
    travel("rahul",budget,bangkok)
}