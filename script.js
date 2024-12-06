const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";

const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

let remainingTime;
let hours;
let minute;
let second; 
let intervalId;

const startTimer = (event) => {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minute = parseInt(minutesInput.value);
    second = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minute * 60 + second;

    intervalId = setInterval(updateTimer, 1000)
    document.documentElement.requestFullscreen();
    hideElement(startButton);
    showElement(stopButton);

}

const updateTimer = () => {
    if (remainingTime > 0) {
        remainingTime =remainingTime -1;
        hours = Math.floor(remainingTime / 3600);
        minute = Math.floor(remainingTime % 3600 / 60);
        second = remainingTime % 60;
    
        hoursInput.value = hours.toString().padStart(2, "0");
        minutesInput.value = minute.toString().padStart(2, "0");
        secondsInput.value = second.toString().padStart(2, "0");
    } else{
        stopTimer();
    }

}
    


const stopTimer = () => {
    clearInterval(intervalId);
    hideElement(stopButton);
    setTimeout(() => {
        document.exitFullscreen();
        showElement(startButton);
    }, 1000);
}

const hideElement = (element) => {
    element.classList.add("hide");
}

const showElement = (element) => {
    element.classList.remove("hide");
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
