// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// TABS
function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// IMAGE MODAL
function openImage(img) {
  document.getElementById("modalImg").src = img.src;
  document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// DARK / LIGHT MODE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};

// SIMPLE SNAKE GAME
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");
let snake = [{x:150,y:150}];
let dx = 10, dy = 0;

function startSnake() {
  setInterval(() => {
    ctx.clearRect(0,0,300,300);
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
    snake.forEach(p => ctx.fillRect(p.x, p.y, 10, 10));
  }, 150);
}
