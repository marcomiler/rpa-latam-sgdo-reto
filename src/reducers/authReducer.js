import {
  REGISTRANDO_USUARIO,
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGUEANDO_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../types";

// Cada reducer tiene su state
const initialState = {
  autenticado: null,
  usuario: null,
  error: null,
  cargando: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };
    case LOGUEANDO_USUARIO:
    case REGISTRANDO_USUARIO:
      return {
        ...state,
        cargando: action.payload,
      };

    case CERRAR_SESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      return {
        ...state,
        usuario: null,
        autenticado: null,
        // recibimos el objeto de alerta
        error: action.payload,
        cargando: false,
      };

    default:
      return state;
  }
}
