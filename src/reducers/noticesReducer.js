import {
  COMENZAR_DESCARGA_NOTICIAS,
  DESCARGA_NOTICIAS_EXITO,
  DESCARGA_NOTICIAS_ERROR,
} from "../types/types";

// Cada reducer tiene su propio state

const initialState = {
  noticias: [],
  error: null,
  loading: false,
  language: "es",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_NOTICIAS:
      return {
        ...state,
        loading: action.payload,
      };
    case DESCARGA_NOTICIAS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        noticias: action.payload.noticias,
        language: action.payload.idioma,
      };

    case DESCARGA_NOTICIAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
