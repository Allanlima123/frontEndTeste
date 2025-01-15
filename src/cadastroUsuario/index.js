import {
  validateInputName,
  validateEmail,
  validatePassword,
} from "../js/validation/validation.js";

import { showError, clearError } from "../js/validation/error.js";
import { showPopup } from "./showPopup.js";

import { formRegister } from "../js/variables.js";
const backToLitsUsers = document.querySelector("#back-to-lits-users")

const sendForm = async (event) => {
  event.preventDefault();

  const formData = new FormData(formRegister);

  const userData = {
    name: formData.get("nameUser").trim(),
    email: formData.get("emailUser").trim(),
    password: formData.get("passWordUser"),
  };

  if (!validateForm(userData)) {
    return;
  }

  try {
    const response = await fetch(
      "http://localhost/backend/crud_user/create.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    if (response.status === 201) {
      alert("Usuário criado com sucesso!");
      formRegister.reset();
    }

    if (response && response.status === 409) {
      showPopup("O email já está cadastrado. Tente outro.");
    }
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    alert("Ocorreu um erro ao criar o usuário. Tente novamente.");
  }
};

const validateForm = ({ name, email, password }) => {
  const validations = {
    nameValidation: validateInputName(name),
    emailValidation: validateEmail(email),
    passWordValidation: validatePassword(password),
  };

  const isValid = Object.entries(validations).every(([key, validation]) => {
    const inputName = key.replace("Validation", "User");
    return validateField(validation, inputName);
  });

  return isValid;
};

const validateField = (validation, inputName) => {
  if (!validation.valid) {
    showError(inputName, validation.msg);
    return false;
  }

  clearError(inputName);
  return true;
};

formRegister.addEventListener("submit", sendForm);
backToLitsUsers.addEventListener("click", () => window.location.href = "../../index.html")
