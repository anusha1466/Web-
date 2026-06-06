let focusTime = 25 * 60;
let breakTime = 5 * 60;

let time = focusTime;
let isFocus = true;
let timer;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("time").innerText =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (timer) return; // prevent multiple timers

  timer = setInterval(() => {
    time--;
    updateDisplay();

    if (time === 0) {
      clearInterval(timer);
      timer = null;

      // 🔔 alert
      alert(isFocus ? "Break Time!" : "Focus Time!");

      // switch mode
      isFocus = !isFocus;
      document.getElementById("mode").innerText =
        isFocus ? "Focus Time" : "Break Time";

      time = isFocus ? focusTime : breakTime;
      updateDisplay();

      startTimer(); // auto restart
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;

  isFocus = true;
  time = focusTime;

  document.getElementById("mode").innerText = "Focus Time";
  updateDisplay();
}

updateDisplay();