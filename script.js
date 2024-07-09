// This assumes you have a file named background-music.mp3 in the same directory as your HTML file.
// Adjust the source path and type according to your actual file.

const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.1; // Adjust the volume as needed

// Play the music
backgroundMusic.play();
