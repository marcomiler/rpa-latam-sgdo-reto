import React, { useEffect } from "react";
import "../../assets/css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { verificarUsuarioTokenAction } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { cerrarSesionAction } from "../../actions/authActions";

const Header = () => {
  // utilizar useDispatch
  const dispatch = useDispatch();
  const history = useHistory();

  const usuarioObtenido = useSelector((state) => state.autenticacion.usuario);

  useEffect(() => {
    setTimeout(() => {
      dispatch(verificarUsuarioTokenAction());
    }, 1500);
  }, [dispatch]);

  const iniciarCerrarSesion = (e) => {
    if (e.target.innerHTML === "Invitado") {
      history.push("/login");
    } else {
      dispatch(cerrarSesionAction());
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bck-yellow p-0">
      <div className="container text-center">
        <div className="d-flex navbar-brand col-md-3">
          <Link to={"/"} className="col-md-6">
            <img
              className="header-logo"
              src="https://cdna.elcomercio.pe/resources/dist/elcomercio/images/logo.png?d=1"
              alt="el comercio"
            />
          </Link>
          <label
            className="navbar-toggler cerrar-sesion links col-md-6 text-end text-dark pt-2"
            type="button"
            onClick={iniciarCerrarSesion}>
            {usuarioObtenido
              ? `${usuarioObtenido.firstName} ${usuarioObtenido.lastName}`
              : "Invitado"}
          </label>
        </div>
        <div className="collapse navbar-collapse mx-3" id="navbarNav">
          <div className="col-md-10 row bck-black p-2 justify-content-center">
            <div className="col-md-3 mr-4">
              <p className="text-light links-div p-2 btn-block font-weight-bold">
                LLama Gratis
              </p>
            </div>
            <div className="col-md-3 mr-2">
              <p className="btn btn-light text-dark links-div p-2 btn-block">
                <i className="fa fa-phone" ></i> 01 311 5100
              </p>
            </div>
            <div className="col-md-4 mr-4">
              <p className="btn btn-warning links-div p-2  text-dark">
                <i className="fa fa-mobile"></i> Te Llamamos
              </p>
            </div>
          </div>
          <ul className="navbar-nav ml-3 text-center col-md-4">
            <button
              type="button"
              className="btn btn-dark cerrar-sesion links text-capitalize p-2 "
              onClick={iniciarCerrarSesion}>
              {usuarioObtenido
                ? `${usuarioObtenido.firstName} ${usuarioObtenido.lastName}`
                : "Invitado"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
