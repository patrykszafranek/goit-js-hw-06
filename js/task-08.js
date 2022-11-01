const loginForm = document.querySelector(".login-form");

const formHandler = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Wymagany EMAIL oraz HASŁO do zalogowania!");
  } else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
    event.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", formHandler);