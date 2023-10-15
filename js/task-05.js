const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const handlerInput = () => {
  if (input.value === "") {
    span.innerHTML = "Anonymous";
  } else {
    span.innerHTML = input.value;
  }
};
input.addEventListener("input", handlerInput);
