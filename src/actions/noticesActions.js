import clienteAxios from "../config/axios";

import {
  DESCARGA_NOTICIAS_ERROR,
  DESCARGA_NOTICIAS_EXITO,
  COMENZAR_DESCARGA_NOTICIAS,
} from "../types";

const API_KEY = "17ff168396b945ee856a59be8e69f367";
let fbusqueda = "";
let fidioma = "es";
let fcategoria = "general";

// Funcion que obtiene los productos del api
export function obtenerNoticiasAction(
  busqueda = "",
  categoria = "",
  idioma = ""
) {
  return async (dispatch) => {
    dispatch(descargarNoticias());
    try {
      if (busqueda === "" && categoria === "" && idioma !== "") {
        fidioma = idioma;
        const respuesta = await clienteAxios.get(
          `/top-headlines?category=${fcategoria}&language=${fidioma}&apiKey=${API_KEY}`
        );
        dispatch(descargaNoticiasExito(respuesta.data.articles, fidioma));
      } else if (busqueda !== "" && idioma !== "") {
        fbusqueda = busqueda;
        fcategoria = "";
        fidioma = idioma;
        const respuesta = await clienteAxios.get(
          `/everything?q=${fbusqueda}&language=${fidioma}&apiKey=${API_KEY}`
        );
        dispatch(descargaNoticiasExito(respuesta.data.articles, fidioma));
      } else {
        fbusqueda = "";
        fcategoria = categoria;
        const respuesta = await clienteAxios.get(
          `/top-headlines?category=${fcategoria}&language=${fidioma}&apiKey=${API_KEY}`
        );
        dispatch(descargaNoticiasExito(respuesta.data.articles, fidioma));
      }
    } catch (error) {
      console.log(error.response);
      dispatch(descargaNoticiasError());
    }
  };
}

const descargarNoticias = () => ({
  type: COMENZAR_DESCARGA_NOTICIAS,
  payload: true,
});

const descargaNoticiasExito = (noticias, idioma) => ({
  type: DESCARGA_NOTICIAS_EXITO,
  payload: { noticias, idioma },
});

const descargaNoticiasError = () => ({
  type: DESCARGA_NOTICIAS_ERROR,
  payload: true,
});
