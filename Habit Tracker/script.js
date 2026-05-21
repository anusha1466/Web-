let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach((habit, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${habit.done ? 'completed' : ''}">
        ${habit.name} 🔥 ${habit.streak}
      </span>
      <div>
        <button onclick="toggleHabit(${index})">✔</button>
        <button onclick="deleteHabit(${index})">❌</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function addHabit() {
  const input = document.getElementById("habitInput");
  if (!input.value) return;

  habits.push({
    name: input.value,
    done: false,
    streak: 0
  });

  input.value = "";
  saveHabits();
  renderHabits();
}

function toggleHabit(index) {
  const habit = habits[index];

  if (!habit.done) {
    habit.done = true;
    habit.streak++;
  } else {
    habit.done = false;
  }

  saveHabits();
  renderHabits();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  renderHabits();
}

// Initial render
renderHabits();