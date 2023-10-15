let counterValue = 0;
const span = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementClick = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const incrementClick = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);
