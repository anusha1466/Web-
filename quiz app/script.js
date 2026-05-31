const quizData = [
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    correct: "Delhi"
  },
  {
    question: "Which language runs in browser?",
    answers: ["Python", "Java", "C++", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Multi Language"
    ],
    correct: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => selectAnswer(answer);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(answer) {
  const correct = quizData[currentQuestion].correct;

  if (answer === correct) {
    score++;
  }

  currentQuestion++;
  loadQuestion();
}

function nextQuestion() {
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  }
}

loadQuestion();