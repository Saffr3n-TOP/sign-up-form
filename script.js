const form = document.querySelector(".form");
const inputs = {};
[
  inputs.firstName,
  inputs.lastName,
  inputs.email,
  inputs.phone,
  inputs.password,
  inputs.confirm,
] = form.querySelectorAll(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let invalidInput;

  Object.keys(inputs).forEach((key) => {
    const inp = inputs[key];
    const hint = inp.nextElementSibling;

    if (!inp.validity.valid) {
      inp.classList.add("input_invalid");
      hint.style.visibility = "visible";
      hint.textContent = "* " + inp.validationMessage;
      if (!invalidInput) invalidInput = inp;
    } else if (key === "confirm" && inp.value !== inputs.password.value) {
      const passwordHint = inputs.password.nextElementSibling;

      inp.classList.add("input_invalid");
      inputs.password.classList.add("input_invalid");
      hint.style.visibility = "hidden";
      passwordHint.style.visibility = "visible";
      passwordHint.textContent = "* Passwords don't match";
      if (!invalidInput) invalidInput = inputs.password;
    } else {
      inp.classList.remove("input_invalid");
      hint.style.visibility = "hidden";
    }
  });

  if (invalidInput) invalidInput.focus();
});
