let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

function setTimerAndShow(secondsLeft) {
    clearPreviousTimers();
    timerTextEl.textContent = `${secondsLeft} seconds left`;

    timerId = setInterval(function() {
        secondsLeft--;
        if (secondsLeft > 0) {
            timerTextEl.textContent = `${secondsLeft} seconds left`;
        } else {
            clearPreviousTimers();
            timerTextEl.textContent = timerCompletedText;
        }
    }, 1000);
}

twentySecondsBtnEl.onclick = function() {
    setTimerAndShow(20);
};
thirtySecondsBtnEl.onclick = function() {
    setTimerAndShow(30);
};
fortySecondsBtnEl.onclick = function() {
    setTimerAndShow(40);
};
oneMinuteBtnEl.onclick = function() {
    setTimerAndShow(60);
};