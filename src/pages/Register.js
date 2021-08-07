import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { registrarUsuarioAction } from "../actions/authActions";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarRegistroCuenta from "../helpers/validations/validationRegister";

let styles = {
  fontWeight: "300",
  color: "#dc3545",
  fontSize: "10pt",
};

const STATE_INICIAL = {
  email: "",
  password: "",
  name: "",
  lastName: "",
  secondLastName: "",
  phone: "",
  typeDoc: "",
  numDoc: "",
};

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

  // VALIDACION DEL FORMULARIO
  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarRegistroCuenta,
    registrarCuenta
  );

  const {
    email,
    password,
    name,
    lastName,
    secondLastName,
    phone,
    typeDoc,
    numDoc,
  } = valores;

  function registrarCuenta() {
    registrarUsuario(valores);
  }

  return (
    <div className="form-responsive bck-gray">
      <div className="border-form">
        <Link className="btn btn-dark btn-block" to={"/"}>
          Volver a la página principal
        </Link>
        <form onSubmit={handleSubmit} noValidate>
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
                required
                value={email}
                onChange={handleChange}
              />
              {errores.email && <p style={styles}>{errores.email}</p>}
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
                value={password}
                required
                onChange={handleChange}
              />
              {errores.password && <p style={styles}>{errores.password}</p>}
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
              value={name}
              onChange={handleChange}
            />
            {errores.name && <p style={styles}>{errores.name}</p>}
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
                value={lastName}
                onChange={handleChange}
              />
              {errores.lastName && <p style={styles}>{errores.lastName}</p>}
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
                value={secondLastName}
                onChange={handleChange}
              />
              {errores.secondLastName && (
                <p style={styles}>{errores.secondLastName}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="phone"
              name="phone"
              placeholder="Teléfono/Celular"
              className="form-control"
              pattern="[0-9]{7,9}"
              title="7 a 9 caracteres numéricos"
              minLength="7"
              maxLength="9"
              value={phone}
              onChange={handleChange}
            />
            {errores.phone && <p style={styles}>{errores.phone}</p>}
          </div>

          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <select
                name="typeDoc"
                className="form-control"
                required
                value={typeDoc}
                onChange={handleChange}>
                <option value="">[Seleccione]</option>
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
              </select>
              {errores.typeDoc && <p style={styles}>{errores.typeDoc}</p>}
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                name="numDoc"
                placeholder="Número Documento"
                className="form-control"
                pattern="[0-9]{8}"
                title="8 caracteres numéricos"
                minLength="8"
                maxLength="8"
                required
                value={numDoc}
                onChange={handleChange}
              />
              {errores.numDoc && <p style={styles}>{errores.numDoc}</p>}
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-warning btn-block text-center font-weight-bold"
              value="Registrarse"
            />
          </div>
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