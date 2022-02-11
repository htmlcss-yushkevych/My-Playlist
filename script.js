let song = document.querySelector('audio');
let iconPlay = document.querySelector('#iconPlay');
let iconPause = document.querySelector('#iconPause');

iconPlay.addEventListener('click', playPauseSong);
iconPause.addEventListener('click', playPauseSong);

function playPauseSong() {
    if (song.paused) {
        song.play();
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
    } else {
        song.pause();
        iconPause.style.display = "none";
        iconPlay.style.display = "block";
    }
}