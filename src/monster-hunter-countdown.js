const releaseDate = new Date("26 March 2021").getTime();
const timerHTML = document.getElementById("timer");

function updateTimer(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  timerHTML.innerHTML = `<h1>Time until release: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</h1>`;
}

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = releaseDate - now;
  if (distance < 0) {
    clearInterval(interval);
    timerHTML.innerHTML = `<h1>The game is out!</h1>`;
    document.getElementById("ytplayer").src =
      "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playlist=dQw4w9WgXcQ";
    return;
  }
  updateTimer(distance);
}, 1000);
