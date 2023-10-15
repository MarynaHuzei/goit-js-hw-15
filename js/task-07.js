const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handlerFontSize = ({ currentTarget }) =>
  (text.style.fontSize = `${currentTarget.value}px`);

input.addEventListener("input", handlerFontSize);
