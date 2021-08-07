import Swal from "sweetalert2";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  LOGUEANDO_USUARIO,
  REGISTRANDO_USUARIO,
} from "../types/types";

// Cuando el usuario inicia sesión
export const iniciarSesionAction = (datos) => {
  return async (dispatch) => {
    dispatch(logueandoUsuario());

    try {
      await window.Identity.login(datos.email, datos.password, {
        rememberMe: true,
      });

      dispatch(logueandoUsuarioExito());
      Swal.fire("Bienvenido!!", "Gracias por volver :)!!", "success");

      // obtener usuario
      dispatch(obtenerUsuarioAction());
    } catch (error) {
      if (error.httpStatus === 401) {
        Swal.fire(
          "Ocurrió un error!!",
          "Usuario o contraseña incorrectas",
          "error"
        );
      } else {
        Swal.fire(
          "Ocurrió un error!!",
          "Error inesperado, inténtelo nuevamente",
          "error"
        );
      }
      dispatch(logueandoUsuarioError());
    }
  };
};

const logueandoUsuario = () => ({
  type: LOGUEANDO_USUARIO,
  payload: true,
});

const logueandoUsuarioError = () => ({
  type: LOGIN_ERROR,
  payload: true,
});

const logueandoUsuarioExito = () => ({
  type: LOGIN_EXITOSO,
});

export const obtenerUsuarioAction = () => {
  return async (dispatch) => {
    try {
      const respuesta = await window.Identity.getUserProfile();
      dispatch(usuarioObtenido(respuesta));
    } catch (error) {}
  };
};

const usuarioObtenido = (datos) => ({
  type: OBTENER_USUARIO,
  payload: datos,
});

export const registrarUsuarioAction = (datos) => {
  return async (dispatch) => {
    dispatch(registrandoUsuario());
    const {
      email,
      password,
      name,
      lastName,
      secondLastName,
      phone,
      typeDoc,
      numDoc,
    } = datos;
    try {
      await window.Identity.signUp(
        {
          userName: email,
          credentials: password,
          password: "password",
        },
        {
          firstName: name,
          lastName: lastName,
          secondLastName: secondLastName,
          displayName: email,
          email: email,
          contacts: [
            {
              phone: phone,
              type: "HOME",
            },
          ],
          attributes: [
            {
              name: "typeDocument",
              value: typeDoc,
              type: "String",
            },
            {
              name: "document",
              value: numDoc,
              type: "String",
            },
          ],
        },
        { doLogin: true },

        { rememberMe: true }
      );
      dispatch(registroUsuarioExitoso());
      Swal.fire(
        "Bienvenido!!",
        "Usuario registrado exitosamente :)!!",
        "success"
      );

      // obtener usuario
      dispatch(obtenerUsuarioAction());
    } catch (error) {
      console.log(error);
      dispatch(registroUsuarioError());
      if (error.httpStatus === 400) {
        Swal.fire(
          "Aviso!!",
          "Esta cuenta ya fue registrada, por favor ingrese otra",
          "info"
        );
      } else {
        Swal.fire(
          "Ocurrió un error!!",
          "Ocurrió un error, por favor intente nuevamente",
          "error"
        );
      }
    }
  };
};

const registrandoUsuario = () => ({
  type: REGISTRANDO_USUARIO,
  payload: true,
});

const registroUsuarioExitoso = () => ({
  type: REGISTRO_EXITOSO,
});

const registroUsuarioError = () => ({
  type: REGISTRO_ERROR,
  payload: true,
});

export const cerrarSesionAction = () => {
  return async (dispatch) => {
    try {
      await window.Identity.logout();
      Swal.fire("HASTA PRONTO!!!", "Lo estaremos esperando :)!!", "success");
      dispatch(cerrarSesionUsuario());
    } catch (error) {
      Swal.fire(
        "Ocurrió un error!",
        "Hubo un error al cerrar su sesión",
        "error"
      );
    }
  };
};

const cerrarSesionUsuario = () => ({
  type: CERRAR_SESION,
});

export const verificarUsuarioTokenAction = () => {
  return async (dispatch) => {
    try {
      const respuesta = await window.Identity.isLoggedIn();
      if (respuesta === true) {
        dispatch(obtenerUsuarioAction());
      } else {
        return;
      }
    } catch (error) {}
  };
};
