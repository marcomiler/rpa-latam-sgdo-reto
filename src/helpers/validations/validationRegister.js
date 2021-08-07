export default function validarRegistroCuenta(valores) {
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
  
    // validar el name
    if (!valores.name) {
      errores.name = "El nombre es obligatorio";
    } else if (!/^[a-zA-záéíóúÁÉÍÓÚ ]{2,40}$/i.test(valores.name)) {
      errores.name = "Nombre no válido";
    }
  
    // validar el lastNname
    if (!valores.lastName) {
      errores.lastName = "El apellido paterno es obligatorio";
    } else if (!/^[a-zA-záéíóúÁÉÍÓÚ ]{2,25}$/i.test(valores.lastName)) {
      errores.lastName = "Apellido paterno no válido";
    }
  
    // validar el secondLastName
    if (!valores.secondLastName) {
      errores.secondLastName = "El apellido materno es obligatorio";
    } else if (!/^[a-zA-záéíóúÁÉÍÓÚ ]{2,25}$/i.test(valores.secondLastName)) {
      errores.secondLastName = "Apellido materno no válido";
    }
  
    // validar el phone
    if (!valores.phone) {
      errores.phone = "El teléfono/celular es obligatorio";
    } else if (!/^[0-9]{7,9}$/i.test(valores.phone)) {
      errores.phone = "7 a 9 caracteres numéricos";
    }
  
    // validar el typeDoc
    if (!valores.typeDoc) {
      errores.typeDoc = "Seleccione el tipo de documento";
    }
    // validar el phone
    if (!valores.numDoc) {
      errores.numDoc = "El nro. de documento es obligatorio";
    } else if (!/^[0-9]{8}$/i.test(valores.numDoc)) {
      errores.numDoc = "8 caracteres numéricos";
    }
  
    return errores;
  }