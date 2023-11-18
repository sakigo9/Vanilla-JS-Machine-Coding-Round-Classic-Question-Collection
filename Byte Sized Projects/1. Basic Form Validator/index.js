const form = document.querySelector("#main");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re-password");

function checkRequiredFields(myInputs) {
  let validater = false;
  myInputs.forEach((input) => {
    if (input.value.trim() === "") {
      invokeErrorMsg(input, "This field is required!");
    } else {
      invokeSuccessMsg(input);
      validater = true;
    }
  });
  return validater;
}

function invokeErrorMsg(inputType, message) {
  const pickParent = inputType.parentNode;
  pickParent.classList = "form_control error";
  const pickErrorSmall = pickParent.lastElementChild; // can also use pickParent.querySelector("small")
  pickErrorSmall.textContent = message;
}

function invokeSuccessMsg(inputType) {
  const pickParent = inputType.parentNode;
  pickParent.classList = "form_control success";
}

function validateMinimumLength(input, minLength, maxLength) {
  let validater = false;
  if (
    input.value.trim().length >= minLength &&
    input.value.trim().length <= maxLength
  ) {
    invokeSuccessMsg(input);
    validater = true;
  } else {
    invokeErrorMsg(
      input,
      `${getFieldName(input)} must be at least ${minLength} characters`
    );
  }
  return validater;
}

function emailValidator(email) {
  let validater = false;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email.value.trim())) {
    invokeSuccessMsg(email);
    validater = true;
  } else {
    invokeErrorMsg(email, "Please enter a valid Email!");
  }
  return validater;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function passwordMatcher(password, confirmPassword) {
  let validater = false;
  if (password.value !== confirmPassword.value) {
    invokeErrorMsg(confirmPassword, "Password doesn't match!");
  } else {
    invokeSuccessMsg(confirmPassword);
    validater = true;
  }
  return validater;
}
// form eventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    checkRequiredFields([name, email, password, rePassword]) &&
    validateMinimumLength(name, 3, 15) &&
    validateMinimumLength(password, 6, 26) &&
    emailValidator(email) &&
    passwordMatcher(password, rePassword)
  ) {
    alert("Validation Completed!");
  }else{
    
  }
});
