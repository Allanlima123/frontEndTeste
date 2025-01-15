const showError = (inputName, message) => {
  const errorMessage = document.getElementById(`${inputName}-error`);
  if (errorMessage) {
    errorMessage.innerText = message;
    errorMessage.classList.add("error-message");
  }
};

const clearError = (inputName) => {
  const errorMessage = document.getElementById(`${inputName}-error`);
  if (errorMessage) {
    errorMessage.textContent = "";
    errorMessage.classList.remove("error-message");
  }
};

export { showError, clearError };
