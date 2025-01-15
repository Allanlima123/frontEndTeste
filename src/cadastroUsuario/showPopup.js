import { formRegister } from "../js/variables.js";


export const showPopup = (message) => {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.textContent = message;

  const closeButton = document.createElement("button");
  closeButton.textContent = "Fechar";
  closeButton.className = "close-popup";

  const removePopup = () => {
    if (popup.parentNode) {
      popup.remove();
      formRegister.reset();
    }
  };

  closeButton.addEventListener("click", removePopup);

  const autoCloseTimeout = setTimeout(removePopup, 3000);

  closeButton.addEventListener("click", () => clearTimeout(autoCloseTimeout));

  popup.appendChild(closeButton);
  document.body.appendChild(popup);
};
