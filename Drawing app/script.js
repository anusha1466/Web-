const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");

canvas.width = 500;
canvas.height = 400;

let drawing = false;

// Start drawing
canvas.addEventListener("mousedown", () => {
  drawing = true;
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

// Draw
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = brushSize.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = colorPicker.value;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

// Clear canvas
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});