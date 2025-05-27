const text = "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Typing practice helps improve your speed and accuracy.";
const textDisplay = document.getElementById('text-display');
const input = document.getElementById('input');
const timer = document.getElementById('timer');
const resetButton = document.getElementById('reset');

let timeLeft = 30;
let timerRunning = false;
let timerInterval;

function displayText() {
    textDisplay.innerHTML = text.split('').map((char, index) => {
        let color = '#888';
        if (index < input.value.length) {
            color = char === input.value[index] ? '#4CAF50' : '#f44336';
        }
        return `<span style="color: ${color}">${char}</span>`;
    }).join('');
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            timer.textContent = timeLeft + 's';
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                input.disabled = true;
                alert('Test completed!');
            }
        }, 1000);
    }
}

function reset() {
    clearInterval(timerInterval);
    timeLeft = 30;
    timerRunning = false;
    input.value = '';
    input.disabled = false;
    timer.textContent = '30s';
    displayText();
}

input.addEventListener('input', () => {
    if (input.value.length === 1) {
        startTimer();
    }
    displayText();
});

resetButton.addEventListener('click', reset);

displayText();