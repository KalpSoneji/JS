var fname = prompt("Enter name");
var pct = prompt("Enter %");
var final;

const sci = (fname, pct) => fname + " has chose sci with " + pct + "%";
const com = (fname, pct) => fname + " has chose com with " + pct + "%";
const art = (fname, pct) => fname + " has chose art with " + pct + "%";

if(pct>85){
    final = sci(fname,pct);
}

else if(pct > 70){
    final = com(fname,pct);
}

else if(pct>50){
    final = art(fname,pct);
}

else{
    final = "Better luck next time";
}

console.log(final);