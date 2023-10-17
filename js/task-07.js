const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = input.value;
const handlerFontSize = ({ currentTarget }) =>
  (text.style.fontSize = `${currentTarget.value}px`);

input.addEventListener("input", handlerFontSize);
