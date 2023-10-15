function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("controls");
const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");

divBoxes.style.display = "flex";
divBoxes.style.flexWrap = "wrap";
divBoxes.style.alignItems = "center";

createBtn.addEventListener("click", () => {
  if (
    Number(input.value) > Number(input.max) ||
    Number(input.value) < Number(input.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(input.value);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  input.value = "";
  divBoxes.innerHTML = "";
}
function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="margin: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
}
