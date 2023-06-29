function restartAudio() {
    var audio = document.getElementById("sound1");
    audio.pause();  // Pause the audio
    audio.currentTime = 0;  // Reset the audio's current time
    audio.play();  // Start playing the audio from the beginning
  }
  