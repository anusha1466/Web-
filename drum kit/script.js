// Detect key press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

// Detect button click
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function() {
    playSound(this.dataset.key);
  });
});

function playSound(key) {
  let audio;

  switch(key) {
    case "a":
      audio = new Audio("sounds/kick.wav");
      break;
    case "s":
      audio = new Audio("sounds/snare.wav");
      break;
    case "d":
      audio = new Audio("sounds/tom.wav");
      break;
    case "f":
      audio = new Audio("sounds/crash.wav");
      break;
    default:
      return;
  }

  audio.play();
}