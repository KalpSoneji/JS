var stadium = prompt("Enter stadium: ");
var toss = prompt("Enter toss: ");
var final;

const match1 = (stadium, toss) => "We won " + toss + " and will play on " + stadium + " ground" 

const match2 = (stadium, toss) => 
    console.log("We won " + toss + " and will play on " + stadium + " ground");

const match3 = (stadium, toss) => {
    console.log("We lost " + toss + " and will play on " + stadium + " ground");
}

const match4 = (stadium, toss) => {

    console.log("We lost " + toss + " and will play on " + stadium + " ground");

}

if(stadium == "home" && toss == "heads")
    final = match1(stadium, toss);

else if(stadium == "away" && toss == "heads")
    final = match2(stadium, toss);

else if(stadium == "home" && toss == "tails")
    final = match3(stadium, toss);

else if(stadium == "away" && toss == "tails")
    final = match4(stadium, toss);

else
    final = "You suck!!!"
