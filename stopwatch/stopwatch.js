var hours = document.getElementById("hrs");
var minutes = document.getElementById("mins");
var seconds = document.getElementById("secs");

var hour = 0;
var minute = 0;
var second = 0;

var x;

const start = () => {

    if(x == null)
        x = setInterval(() => {
            start2()
        }, 1000)
}

const start2 = () => {

    second++;

    if(second == 60){
        second = 0;
        minute++;
    }

    if(minute == 60){
        minute = 0;
        hour++;
    }

    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = minute < 10 ? "0" + minute : minute;
    secs.innerHTML = second < 10 ? "0" + second : second;
}

const stop = () => {
    clearInterval(x);
    x = null;
}

const reset = () => {

    clearInterval(x);
    x = null;
    
    hour = 0;
    minute = 0;
    second = 0;

    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = minute < 10 ? "0" + minute : minute;
    secs.innerHTML = second < 10 ? "0" + second : second;
}