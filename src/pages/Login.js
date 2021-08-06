import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { iniciarSesionAction } from "../actions/authActions";

function Login() {
  const history = useHistory();
  // utilizar useDispatch
  const dispatch = useDispatch();

  // producto a editar
  const usuarioObtenido = useSelector((state) => state.autenticacion.usuario);

  // llenar el state automaticamente
  useEffect(() => {
    if (usuarioObtenido) {
      history.push("/");
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuarioObtenido]);

  // mandar a llamar el action de productoAction
  const ingresarLogin = (datos) => dispatch(iniciarSesionAction(datos));

  const [datos, guardarDatos] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ingresarLogin(datos);
  };

  return (
    <>
      <div className="form-responsive bck-gray">
        <div className="border-form">
          <Link className="btn btn-dark btn-block" to={"/"}>
            Volver a la página principal
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="titulo-form">
                <h3>Login</h3>
              </div>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                placeholder="Ingresa Correo"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                title="ejemplo@ej.com"
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Ingresa Contraseña"
                minLength="8"
                maxLength="15"
                pattern="[A-Za-z0-9@_. ]{8,15}"
                title="ejm: ejemplo@ej123"
                required
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-success btn-block text-center font-weight-bold"
                value="Iniciar Sesión"
                name="loginBtn"
              />
            </div>
            <div className="form-group text-center">
              <p>
                Aún no registrado? <Link to={"/nueva-cuenta"}>Registrate!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
