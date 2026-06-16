const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreText = document.getElementById("score");

let snake, dx, dy, food, score, gameRunning;

function init() {
  snake = [{ x: 200, y: 200 }];
  dx = 20;
  dy = 0;
  food = randomFood();
  score = 0;
  gameRunning = true;
  scoreText.innerText = "Score: 0";
}

function randomFood() {
  return {
    x: Math.floor(Math.random() * 20) * 20,
    y: Math.floor(Math.random() * 20) * 20
  };
}

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowUp" && dy === 0) {
    dx = 0; dy = -20;
  }
  if (e.key === "ArrowDown" && dy === 0) {
    dx = 0; dy = 20;
  }
  if (e.key === "ArrowLeft" && dx === 0) {
    dx = -20; dy = 0;
  }
  if (e.key === "ArrowRight" && dx === 0) {
    dx = 20; dy = 0;
  }
}

function draw() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, 400, 400);

  // Move snake
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Game over (wall collision)
  if (
    head.x < 0 || head.y < 0 ||
    head.x >= 400 || head.y >= 400 ||
    collision(head)
  ) {
    gameRunning = false;
    alert("Game Over! Score: " + score);
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreText.innerText = "Score: " + score;
    food = randomFood();
  } else {
    snake.pop();
  }

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);

  // Draw snake
  ctx.fillStyle = "lime";
  snake.forEach(part => {
    ctx.fillRect(part.x, part.y, 20, 20);
  });

  setTimeout(draw, 100);
}

function collision(head) {
  return snake.some(part => part.x === head.x && part.y === head.y);
}

function restartGame() {
  init();
  draw();
}

// Start game
init();
draw();