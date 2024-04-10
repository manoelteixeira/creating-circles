const canvas = document.querySelector(".canvas");
const addButton = document.querySelector(".add");

addButton.addEventListener("click", (event) => {
  const { top, left } = getRandomPosition();
  const newCircle = document.createElement("div");
  newCircle.classList.add("circle");
  newCircle.style.backgroundColor = getRandomColor();
  newCircle.style.top = `${top}px`;
  newCircle.style.left = `${left}px`;
  canvas.appendChild(newCircle);
});

//  Hellper functions
function getRandomPosition() {
  let { width, height } = canvas.getBoundingClientRect();
  width = Math.floor(width);
  height = Math.floor(height);

  const top = Math.floor(Math.random() * (height - 50));
  const left = Math.floor(Math.random() * (width - 50));

  return { top, left };
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
