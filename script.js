const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countup() {

    const startPlaying = "1 Sept 2014";
    const startPlayingDate = new Date(startPlaying);
    const currentDate = new Date("4 May 2021");

    const totalSeconds = (currentDate - startPlayingDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = 34;
    const seconds = 15;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countup();
setInterval(countup, 1000);
