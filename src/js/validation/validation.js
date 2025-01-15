const validateInputName = (name) => {
  let msg = "";

  if (!name || name.trim().length === 0) {
    msg += "Please provide your full name!\n";
    return { valid: false, msg };
  }

  if (/^[0-9]/.test(name)) {
    msg += "The name cannot start with numbers.\n";
    return { valid: false, msg };
  }

  if (name.length < 3) {
    msg += "The name must be at least 3 characters long.\n";
    return { valid: false, msg };
  }

  return { valid: true, msg: "Valid name!" };
};

const validateEmail = (email) => {
  let msg = "";

  if (!email || email.trim().length === 0) {
    msg = "The email cannot be empty.";
    return { valid: false, msg };
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/;

  if (!emailPattern.test(email)) {
    msg = "The email provided is not valid.";
    return { valid: false, msg };
  }

  return { valid: true, msg: "Valid email!" };
};

const validatePassword = (password) => {
  let msg = "";

  if (!password || password.trim().length === 0) {
    msg = "The password cannot be empty.";
    return { valid: false, msg };
  }

  if (password.length < 6 || password.length > 20) {
    msg = "The password must be between 6 and 20 characters.";
    return { valid: false, msg };
  }

  if (!/[A-Z]/.test(password)) {
    msg = "The password should contain at least 1 uppercase character.";
    return { valid: false, msg };
  }

  if (!/[a-z]/.test(password)) {
    msg = "The password must contain at least one lowercase letter.";
    return { valid: false, msg };
  }

  if (!/\d/.test(password)) {
    msg = "The password must contain at least one number.";
    return { valid: false, msg };
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    msg = "The password must contain at least one special character.";
    return { valid: false, msg };
  }

  return { valid: true, msg: "Valid password!" };
};

export { validateInputName, validateEmail, validatePassword };
