export const validateFields = (email, pass1, pass2) => {
    if (email === "" || pass1 === "" || pass2 === "") {
      return "Faltan Datos en los campos";
    }
  
    if (pass1 !== pass2) {
      return "Las contraseñas no son iguales";
    }
  
    if (pass1.length < 6) {
      return "Las contraseñas no cumplen la longitud";
    }
  
    return "Datos OK";
  };
  
  export const validateFieldsLogin = (email, pass) => {
     if (email === "" || pass === "" ) {
      return "Faltan datos en los campos";
     }
     if (pass.length < 6) {
      return "Las contraseña no cumplen la longitud";
    }
     return true;
   }