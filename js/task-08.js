const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All fields must be completed 🤨");
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  evt.currentTarget.reset();
}
