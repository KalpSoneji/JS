var a = prompt("Enter a letter: ");
var i = 1, count = 0;


while(i<a){
    if(a % i == 0)
        count++;
    i++;
}

if(count == 0)
    console.log(a + " is a prime number");
else
    console.log(a + ' is not a prime number.');
    
        