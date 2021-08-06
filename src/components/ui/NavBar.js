import React, { useState, useEffect } from "react";
import "../../assets/css/navBar.css";
import Lupa from "../../assets/img/lupa.svg";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  cerrarSesionAction,
  verificarUsuarioTokenAction,
} from "../../actions/authActions";

import { obtenerNoticiasAction } from "../../actions/noticesActions";

export default function NavBar() {
  // utilizar useDispatch
  const dispatch = useDispatch();

  const idiomaObtenido = useSelector((state) => state.noticias.language);

  // usuario obtenido del reducer
  const usuarioObtenido = useSelector((state) => state.autenticacion.usuario);

  const [menuDisplay, setMenuDisplay] = useState(false);

  const [busqueda, guardarBusqueda] = useState("");

  useEffect(() => {
    setTimeout(() => {
      dispatch(verificarUsuarioTokenAction());
    }, 1500);
  }, [dispatch]);

  const cerrar_Sesion = () => {
    dispatch(cerrarSesionAction());
  };

  const cambioIdioma = (e) => {
    if (busqueda !== "") {
      dispatch(obtenerNoticiasAction(busqueda, "", e.target.value));
    } else {
      dispatch(obtenerNoticiasAction("", "", e.target.value));
    }
  };

  const handleSearch = (e) => {
    guardarBusqueda(e.target.value);
  };

  const buscarPorFiltro = (e) => {
    e.preventDefault();

    dispatch(obtenerNoticiasAction(busqueda, "", idiomaObtenido));
  };

  const abrirMenu = () => {
    if (menuDisplay === false) {
      document.getElementById("navbarNav").style.display = "block";
      setMenuDisplay(!menuDisplay);
    } else {
      document.getElementById("navbarNav").style.display = "none";
      setMenuDisplay(!menuDisplay);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div
        className="container text-center"
        style={usuarioObtenido ? { minWidth: "98%" } : {}}>
        <div className="d-flex navbar-brand">
          <form className="row" onSubmit={buscarPorFiltro}>
            <div className="form-inline">
              <input
                className="form-control buscador block col-10"
                type="search"
                placeholder="¿Qué buscas?"
                name="search"
                onChange={handleSearch}
                value={busqueda}
              />
              <button className="btn btn-dark block col-2" type="submit">
                <img className="lupa" src={Lupa} alt="" />
              </button>
            </div>
          </form>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => abrirMenu()}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
              <NavLink className="links" to="/business">
                NEGOCIOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="links" to="/entertainment">
                ENTRETENIMIENTO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="links" to="/general">
                GENERAL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="links" to="/health">
                SALUD
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="links" to="/science">
                CIENCIAS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="links" to="/sports">
                DEPORTES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="links" to="/technology">
                TECNOLOGIA
              </NavLink>
            </li>
            <li className="nav-item">
              <select
                className="btn btn-dark links"
                name="language"
                value={idiomaObtenido}
                onChange={cambioIdioma}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="pt">Português</option>
                <option value="ru">Pусский</option>
              </select>
            </li>
            <li className="nav-item">
              {usuarioObtenido ? (
                <button
                  type="button"
                  onClick={() => cerrar_Sesion()}
                  className="btn btn-danger links">
                  Cerrar Sesión
                </button>
              ) : (
                <Link className="btn btn-primary links" to="/login">
                  Iniciar Sesión
                </Link>
              )}
            </li>
            <li className="nav-item">
              {usuarioObtenido ? (
                <label className="btn-dark cerrar-sesion links text-capitalize">
                  {usuarioObtenido.firstName} {usuarioObtenido.lastName}
                </label>
              ) : (
                <label className="btn-dark cerrar-sesion links">Invitado</label>
              )}
            </li>
            {usuarioObtenido ? (
              <li className="nav-item">
                <Link
                  className="btn btn-light text-dark links text-uppercase"
                  to={"/suscription"}>
                  Suscripción
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
