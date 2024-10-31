// Tentukan tanggal dan waktu acara
const eventDate = new Date("Dec 21, 2024 08:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;

  if (timeRemaining < 0) {
    document.getElementById("countdown").innerHTML = "<h2>Event Started!</h2>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update countdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Memanggil sekali untuk tampilan awal
