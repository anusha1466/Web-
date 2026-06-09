function setMood(mood) {
  const today = new Date().toLocaleDateString();

  let moods = JSON.parse(localStorage.getItem("moods")) || {};
  moods[today] = mood;

  localStorage.setItem("moods", JSON.stringify(moods));

  displayMood();
}

function displayMood() {
  const today = new Date().toLocaleDateString();
  let moods = JSON.parse(localStorage.getItem("moods")) || {};

  document.getElementById("todayMood").innerText =
    "Today's Mood: " + (moods[today] || "Not set");
}

displayMood();