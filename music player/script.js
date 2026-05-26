const songs = [
  { name: "Song 1", file: "songs/song1.mp3" },
  { name: "Song 2", file: "songs/song2.mp3" },
  { name: "Song 3", file: "SpotiDown.App - Love Me Like You Do - Ellie Goulding" }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const progress = document.getElementById("progress");

function loadSong() {
  audio.src = songs[index].file;
  title.innerText = songs[index].name;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong();
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong();