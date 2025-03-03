var pin = 1234;
var balance = 50000;

const checkbalance = (pin, balance) => {

    let enteredpin = parseInt(prompt("Enter pin"));

    if(pin == enteredpin){
        alert("Current Balance " + balance);
        console.log("your current balance is ", balance);
    }

    else{
        alert("Invalid Pin");
    }

}

const withdraw = (pin, balance) => {

    let withdrawamount = parseInt(prompt("Enter amount you want to withdraw"));

    let enteredpin = parseInt(prompt("Enter pin"));

        if(pin == enteredpin){

            if((balance - withdrawamount) >= 5000){
                
                balance = balance - withdrawamount;

                console.log("your current balance is ", balance);
                alert("You've withdrawn " + withdrawamount + " successfully");
            }

            else {
                alert("Insufficient balance");
            }

        }

        else{
            alert("Invalid pin");
        }

}

const deposit = (pin, balance) => {

    let depositamount = parseInt(prompt("Enter amount you want to deposit"));

    let enteredpin = parseInt(prompt("Enter pin"));

    if(pin == enteredpin){

        balance = balance + depositamount;
        console.log("your current balance is ", balance);

        alert("New balance: " + balance);

    }

    else{
        alert("Invalid pin");
    }

}

console.log("Enter 1 to check balance.\n2 to withdraw.\n3 to deposit." );

var choice = parseInt(prompt("Enter choice"));

        switch (choice) {
        case 1:
            checkbalance(pin, balance);
            break;

        case 2:
            withdraw(pin, balance);
            break;

        case 3:
            deposit(pin, balance);
            break;

        default:
            alert("Enter valid choice");
            break;

        }

// var pin = 1234;
// var balance = 50000;

// console.log("Enter 1 to check balance.\n2 to withdraw.\n3 to deposit.");

// var choice = parseInt(prompt("Enter choice")); // Convert choice to a number

// const checkbalance = (pin, balance) => {
//     var enteredpin = parseInt(prompt("Enter pin")); // Convert entered pin to a number

//     if (pin === enteredpin) {
//         console.log("Your current balance is ", balance);
//     } else {
//         alert("Incorrect PIN.");
//     }
// };

// const withdraw = () => {
//     var withdrawamount = parseFloat(prompt("Enter amount you want to withdraw")); // Convert to number

//     if ((balance - withdrawamount) >= 5000) {
//         balance -= withdrawamount; // Update balance
//         console.log("Your current balance is ", balance);
//         alert("You've withdrawn " + withdrawamount + " successfully");
//     } else {
//         alert("Insufficient balance or minimum balance requirement not met.");
//     }
// };

// const deposit = () => {
//     var depositamount = parseFloat(prompt("Enter amount you want to deposit")); // Convert to number

//     balance += depositamount; // Update balance
//     console.log("Your current balance is ", balance);
//     alert("New balance: " + balance);
// };

// switch (choice) {
//     case 1:
//         checkbalance(pin, balance);
//         break;

//     case 2:
//         withdraw();
//         break;

//     case 3:
//         deposit();
//         break;

//     default:
//         alert("Enter valid choice");
//         break;
// }