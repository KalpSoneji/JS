let a = prompt("Enter a number: ");
let i = 1, rem, rev=0;
let num = a;

while(a>0){
    rem = a % 10;
    rev = rev * 10 + rem;
    a = Math.floor(a / 10);
}

if(num == rev)
    console.log("Palindrome");
else
    console.log("Not palindrome.");
    
 