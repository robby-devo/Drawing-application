const canvas = document.getElementById("canvas");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEL = document.getElementById("color");

const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

// draw a circle

let size = 10;

let isPressed = false;
let color = "black";

let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  //   console.log(isPressed);
  //   console.log(x);
  //   console.log(y);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

  //   console.log(isPressed);
  //   console.log(x);
  //   console.log(y);
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed == true) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }

  //   console.log(isPressed);
  //   console.log(x);
  //   console.log(y);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle

  ctx.fillStyle = color;
  ctx.fill();
}
// drawCircle(100, 200);

// x1move to move in
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();

  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// drawLine(300, 300, 2000, 500);

colorEL.addEventListener("change", (e) => {
  color = e.target.value;
  //   color is variable
});

function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

increaseBtn.addEventListener("click", (e) => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});
decreaseBtn.addEventListener("click", (e) => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
