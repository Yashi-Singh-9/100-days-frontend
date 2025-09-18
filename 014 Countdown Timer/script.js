const endDate = new Date("June 9, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days > 0 ? days : "00";
  document.getElementById("hours").innerText = hours > 0 ? hours : "00";
  document.getElementById("minutes").innerText = minutes > 0 ? minutes : "00";
  document.getElementById("seconds").innerText = seconds > 0 ? seconds : "00";

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = "<h2>Trip has started!</h2>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
