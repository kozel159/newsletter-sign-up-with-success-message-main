document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error");
  const successMessage = document.getElementById("finish");
  const formContainer = document.getElementById("subscribtion");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    errorMessage.style.display = "inline";
    emailInput.classList.add("invalid");
    successMessage.hidden = true;
  } else {
    errorMessage.style.display = "none";
    emailInput.classList.remove("invalid");

    formContainer.style.display = "none";
    successMessage.hidden = false;
  }
});

document.getElementById("dismiss").addEventListener("click", function () {
  location.reload();
});
