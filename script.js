const button = document.getElementById('openGift');
const surprise = document.querySelector('.surprise');
const intro = document.querySelector('.intro');
const song = document.getElementById('birthdaySong');

button.addEventListener('click', () => {
  intro.classList.add('hidden');
  surprise.classList.remove('hidden');

  // Add animation classes
  document.querySelectorAll('.animated').forEach(el => {
    el.classList.add('fade-in');
  });

  // Start music
  song.play();

  // Launch confetti
  launchConfetti();
});

function launchConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      ...defaults,
      particleCount: 50,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
  }, 250);
}
