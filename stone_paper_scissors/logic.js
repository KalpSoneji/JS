function play(userChoice) {
    const choices = ['stone', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (userChoice === computerChoice)
        result = "It's a draw!";
    else if (
        (userChoice === 'stone' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissor' && computerChoice === 'paper'))
        result = "You win!";
    else
        result = "Computer wins!";

    document.getElementById("winner").innerHTML = "Result: " + result;
}