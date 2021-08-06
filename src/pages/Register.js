import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { registrarUsuarioAction } from "../actions/authActions";

function Register() {
  const history = useHistory();
  // utilizar useDispatch
  const dispatch = useDispatch();

  // usuario obtenido
  const usuarioObtenido = useSelector((state) => state.autenticacion.usuario);

  // mandar a llamar el action de registrarUsuarioAction
  const registrarUsuario = (datos) => dispatch(registrarUsuarioAction(datos));

  // llenar el state automaticamente
  useEffect(() => {
    if (usuarioObtenido) {
      history.push("/");
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuarioObtenido]);

  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    secondLastName: "",
    phone: "",
    typeDoc: "",
    numDoc: "",
  });

  const {
    email,
    password,
    name,
    lastName,
    secondLastName,
    phone,
    typeDoc,
    numDoc,
  } = dataRegister;

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    registrarUsuario(dataRegister);
  };

  return (
    <div className="form-responsive bck-gray">
      <div className="border-form">
        <Link className="btn btn-dark btn-block" to={"/"}>
          Volver a la página principal
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="titulo-form">
            <h3>Registrate!</h3>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <input
                name="email"
                placeholder="Correo"
                className="form-control"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                title="ejemplo@ej.com"
                onChange={handleInput}
                required
                value={email}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control"
                minLength="8"
                maxLength="15"
                title="ejemplO324@"
                onChange={handleInput}
                required
                value={password}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              minLength="2"
              maxLength="40"
              pattern="[a-zA-záéíóúÁÉÍÓÚ ]{2,40}"
              title="Ejemplo Ejemplo"
              className="form-control text-capitalize"
              onChange={handleInput}
              required
              value={name}
            />
          </div>
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Apellido Paterno"
                className="form-control  text-capitalize"
                pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}"
                title="Silvester"
                minLength="2"
                maxLength="25"
                onChange={handleInput}
                required
                value={lastName}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                type="text"
                name="secondLastName"
                placeholder="Apellido Materno"
                className="form-control  text-capitalize"
                pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}"
                title="Mackley"
                minLength="2"
                maxLength="25"
                onChange={handleInput}
                required
                value={secondLastName}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="phone"
              name="phone"
              placeholder="Teléfono/Celular"
              className="form-control"
              onChange={handleInput}
              pattern="[0-9]{7,9}"
              title="7 a 9 caracteres numéricos"
              minLength="7"
              maxLength="9"
              required
              value={phone}
            />
          </div>

          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <select
                name="typeDoc"
                onChange={handleInput}
                className="form-control"
                required
                value={typeDoc}>
                <option value="">[Seleccione]</option>
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
              </select>
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                name="numDoc"
                placeholder="Número Documento"
                className="form-control"
                onChange={handleInput}
                pattern="[0-9]{8}"
                title="8 caracteres numéricos"
                minLength="8"
                maxLength="8"
                required
                value={numDoc}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-warning btn-block text-center font-weight-bold"
              value="Registrarse"
            />
          </div>
          {/* <Message mensaje={"Ocurrió un error vuelva a intentarlo"} />
          <Spinner /> */}
          <div className="form-group text-center">
            <p>
              Si ya tiene una cuenta haga click <Link to={"/login"}>aquí!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
