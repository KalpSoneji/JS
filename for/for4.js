let a = prompt("Enter a number: ");
let sum = 0;
let product = 1;

for(i=1; i<a; i++){

    if(a % i == 0){
        sum+= i;
        product *= i;
    }
    
}

if(sum == product)
    console.log(a + " is a twin number.");
else
    console.log(a + " is not a twin number.");
    
