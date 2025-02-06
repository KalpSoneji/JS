var a = parseInt(prompt("Enter 1st value: "));
var b = parseInt(prompt("Enter 2nd value: "));
var c = parseInt(prompt("Enter 3rd value: "));

if(a > 35){
    if(b > 35){
        if(c > 35)
            console.log(("a+b+c", a + b + c));
        else
            console.log(("a+b", a + b));
    }
    else if(b <= 35 && c > 35)
        console.log("a+c", a + c);
    else
        console.log("a", a);
}
else{
    if(b > 35){
        if(c > 35)
            console.log((b + c));
        else
            console.log((b));
    }
    else
        if(c > 35)
            console.log(c);
}