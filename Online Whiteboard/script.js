const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;
let color = "#000";

// Start drawing
canvas.addEventListener("mousedown", () => painting = true);
canvas.addEventListener("mouseup", () => {
  painting = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

// Draw function
function draw(e) {
  if (!painting) return;

  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

// Color picker
document.getElementById("colorPicker").addEventListener("change", (e) => {
  color = e.target.value;
});

// Eraser
function setEraser() {
  color = "#FFFFFF";
}

// Clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}