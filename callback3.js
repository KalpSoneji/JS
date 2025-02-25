const science = (option) => {
    console.log(`${option.fname} has chosen science with ${object.perc}.`);
}

const commerce = (option) => {
    console.log(`${option.fname} has chosen commerce with ${object.perc}.`);   
}

const arts = (option) => {
    console.log(`${option.fname} has chosen arts with ${object.perc}.`);   
}

const admission = (fname, perc, cb) => {
       cb({fname: fname, perc: perc});
}

var fname = prompt("Enter your name");
var perc = prompt("Enter your percentage");

if(perc > 90)
    admission(fname, perc, science);

else if(perc > 70)
    admission(fname, perc, commerce);

else if(perc > 50)
    admission(fname, perc, arts);
