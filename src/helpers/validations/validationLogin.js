export default function validarIniciarSesion(valores) {
    let errores = {};
  
    // validar el email
    if (!valores.email) {
      errores.email = "El Email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
      errores.email = "Email no válido";
    }
  
    // validar el password
    if (!valores.password) {
      errores.password = "El password es obligatorio";
    } else if (valores.password.length < 8) {
      errores.password = "Mínimo 8 caracteres";
    }
  
    return errores;
  }