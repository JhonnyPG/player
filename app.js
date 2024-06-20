const videoPlayer = document.getElementById('videoPlayer');
const videoUrl = document.getElementById('videoUrl');
const playButton = document.getElementById('playButton');
let player;

playButton.addEventListener('click', () => {
  const url = videoUrl.value;
  if (url) {
    if (player) {
      player.dispose(); // Eliminar la instancia anterior del reproductor
    }
    player = videojs('videoPlayer', {
      controls: true,
      sources: [
        {
          src: url,
          type: 'video/mp4' // O el tipo de video correspondiente
        }
      ]
    });
    player.play();
  }
});