let timerInterval;
let timeRemaining;
let isPaused = false;

function setTimer() {
  // Clear any previous timers
  clearInterval(timerInterval);

  // Get user input
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;

  // Calculate total time in seconds
  let countdownTime = (hours * 60 * 60) + (minutes * 60) + seconds;

  // Display and start the timer
  const display = document.getElementById('timer');
  startTimer(countdownTime, display);
}

function startTimer(duration, display) {
  let timer = duration, hours, minutes, seconds;

  timerInterval = setInterval(function () {
    if (!isPaused) {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds;

      timeRemaining = timer; // Update time remaining for pause/resume

      if (--timer < 0) {
        clearInterval(timerInterval);
        display.textContent = "Time's up!";
        playSound();  // Play the sound when the timer ends
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = !isPaused; // Toggle pause state
  if (!isPaused) {
    startTimer(timeRemaining, document.getElementById('timer')); // Resume timer
  }
}

// Function to play sound
function playSound() {
  const sound = document.getElementById("alarm-sound");
  sound.play();
}