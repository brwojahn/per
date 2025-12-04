const time = document.getElementById('timer');
const last_time = document.getElementById('last_time')
let testTime = null;
let startingTime = null;
let running = false;
let interval = null;
let lastTime = null
let ao5 = null

document.addEventListener('keydown', function(event) {
  if (event.key === " " && !event.repeat && !running) {
    testTime = Date.now();
    time.textContent = "00:00:00";
    time.style.color = "rgba(160, 0, 0, 1)"
    clearInterval(interval);
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === " " && event.repeat && running) {
    update();
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === " ") {
    if (!running && Date.now() - testTime >= 1000) {
      running = true;
      time.style.color = "rgba(0, 160, 0, 1)"
      startingTime = Date.now();
      interval = setInterval(update, 10);
    } else if (running) {
      running = false;
      clearInterval(interval);
      time.textContent = " ";
      update();
    }
  }
});

function update() {
  let elapsed = Date.now() - startingTime;
  let minutes = Math.floor(elapsed / 60000);
  let seconds = Math.floor((elapsed % 60000) / 1000);
  let milliseconds = Math.floor((elapsed % 1000)/10);

  let minStr = String(minutes).padStart(2, "0");
  let secStr = String(seconds).padStart(2, "0");
  let msStr = String(milliseconds).padStart(2, "0");
  time.textContent = `${minStr}:${secStr}:${msStr}`;
  lastTime = `${minStr}:${secStr}:${msStr}`;
  last_time.textContent = `${lastTime}`;
}
