// Get the audio element and the button
const audio = document.getElementById('labAudio');
const playButton = document.getElementById('playButton');

// Play button functionality
playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause Sound';
  } else {
    audio.pause();
    playButton.textContent = 'Play Sound';
  }
});
