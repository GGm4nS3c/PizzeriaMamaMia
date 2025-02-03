export const validateFields = (email, password, confirmPassword) => {
  if (email === "" || password === "" || confirmPassword === "") {
    return "Faltan datos en los campos";
  }

  if (password !== confirmPassword) {
    return "Las contraseñas no son iguales";
  }

  if (password.length < 6) {
    return "Las contraseñas no cumplen la longitud mínima";
  }

  return true;
};

export const validateFieldsLogin = (email, password) => {
  if (email === "" || password === "") {
    return "Faltan datos en los campos";
  }

  if (password.length < 6) {
    return "La contraseña no cumple la longitud mínima";
  }

  return true;
};
