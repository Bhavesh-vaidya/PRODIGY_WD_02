    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    function timeToString(time) {
      let diff = new Date(time);
      let hours = diff.getUTCHours().toString().padStart(2, '0');
      let minutes = diff.getUTCMinutes().toString().padStart(2, '0');
      let seconds = diff.getUTCSeconds().toString().padStart(2, '0');
      let milliseconds = diff.getUTCMilliseconds().toString().padStart(3, '0');
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    function startStopwatch() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").textContent = timeToString(elapsedTime);
      }, 10);
    }

    function pauseStopwatch() {
      clearInterval(timerInterval);
    }

    function resetStopwatch() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      document.getElementById("display").textContent = "00:00:00.000";
      document.getElementById("laps").innerHTML = "";
    }

    function recordLap() {
      if (elapsedTime === 0) return;
      const lapTime = timeToString(elapsedTime);
      const lapElement = document.createElement("div");
      lapElement.className = "lap";
      lapElement.textContent = `Lap ${document.getElementById("laps").childElementCount + 1}: ${lapTime}`;
      document.getElementById("laps").appendChild(lapElement);
    }