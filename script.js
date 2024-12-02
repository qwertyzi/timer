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
    remainingTime =remainingTime -1;
    hours = Math.floor(remainingTime / 3600);
    minute = Math.floor(remainingTime % 3600 / 60);
    second = remainingTime % 60;

    hoursInput.value = hours;
    minutesInput.value = minute;
    secondsInput.value = second;

}

const stopTimer = () => {
    clearInterval(intervalId);
    document.exitFullscreen();
    hideElement(stopButton);
    showElement(startButton);
}

const hideElement = (element) => {
    element.classList.add("hide");
}

const showElement = (element) => {
    element.classList.remove("hide");
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
