import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useValidateForm } from '../../hooks/useValidateForm';
import { validationProfile } from '../../helpers/validations/validationProfile';

let styles = {
  fontWeight: "500",
  color: "#dc3545"
}

const ProfileScreen = ({handleNext}) => {

  const [ documento ] = useState(['DNI', 'Carnet de Extranjeria', 'Carnet de diplomático']);

  const storage = localStorage.getItem('profile');
  const data =  JSON.parse(storage);
  let initialValue = {}

  if( storage ) {
    initialValue = {
      dpwnDocumento: data.dpwnDocumento,
      dni: data.dni,
      name: data.name,
      lastname1: data.lastname1,
      lastname2: data.lastname2,
      phone: data.phone,
      email: data.email
    }
  }else{
    initialValue = {
    dpwnDocumento: '',
    dni: '',
    name: '',
    lastname1: '',
    lastname2: '',
    phone: '',
    email: ''
    }
  }

  const [ 
    formValues,
    errorForm,
    handleInputChange,
    handleBlur ] = useValidateForm(initialValue, validationProfile);
    
    const {
      dpwnDocumento,
      dni,
      name,
      lastname1,
      lastname2,
      phone,
      email,
    } = formValues;

  validationProfile(formValues);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(formValues));
    if(Object.keys(errorForm).length === 0){
      handleNext();
    }
  }
    
  return (
    <>
      <Typography variant="h5" gutterBottom className="fw-bold">
        Mis datos
      </Typography>
          <Grid className="mt-3">
            <form onSubmit={ handleSubmit }>
              <Grid item lg={8} sm={12}>
                <label htmlFor="dpwnDocumento">Documento de identidad</label>
                <select 
                  id="dpwnDocumento"
                  className="btn col-12 border" 
                  data-bs-toggle="dropdown" 
                  name="dpwnDocumento" 
                  title="Elige un documento"
                  value={ dpwnDocumento }
                  onChange={handleInputChange}
                > 
                  {
                    documento.map(( doc, index ) => (
                      <option key={ index }>{ doc }</option>
                    ))
                  }

                </select>
                { errorForm.dpwnDocumento && <p style={styles}>{ errorForm.dpwnDocumento }</p> }
              </Grid>

              <Grid item lg={8} sm={12} className="mt-3">
                <label htmlFor="dni">Número de documento</label>
                <input
                  id="dni"
                  name="dni"
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  maxLength="7"
                  value={ dni }
                  onChange={handleInputChange}
                />
                { errorForm.dni && <p style={styles}>{ errorForm.dni }</p> }
              </Grid>

              <Grid item lg={10} sm={12} className="mt-3">
              <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  value={ name }
                  autoComplete="off"
                  onChange={handleInputChange}
                />
                { errorForm.name && <p style={styles}>{ errorForm.name }</p> }
              </Grid>

              <div className="row">
                <Grid item lg={6} sm={12} className="mt-3">
                    <label htmlFor="lastname1">Apellido Paterno</label>
                  <input
                    id="lastname1"
                    name="lastname1"  
                    type="text"
                    className="form-control"
                    value={ lastname1 }
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                  { errorForm.lastname1 && <p style={styles}>{ errorForm.lastname1 }</p> }
                </Grid>

                <Grid item lg={6} sm={12} className="mt-3">
                  <label htmlFor="lastname2">Apellido Materno</label>
                  <input
                    id="lastname2"
                    name="lastname2" 
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    value={ lastname2 }
                    onChange={handleInputChange}
                    />
                  { errorForm.lastname2 && <p style={styles}>{ errorForm.lastname2 }</p> }
                </Grid>
              </div>

              <Grid item lg={8} sm={12} className="mt-3">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  value={ phone }
                  maxLength="9"
                  onChange={handleInputChange}
                />
                { errorForm.phone && <p style={styles}>{ errorForm.phone }</p> }
              </Grid>

              <Grid item lg={8} sm={12} className="mt-3">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  label="Correo electrónico"
                  autoComplete="off"
                  value={ email }
                  onChange={handleInputChange}
                />
                { errorForm.email && <p style={styles}>{ errorForm.email }</p> }
              </Grid>
              <br />
              <Grid className="mt-4 ml-3" item xs={12} sm={8}>
              <FormControlLabel
                  control={<label color="secondary" name="saveAddress" value="yes" />}
                  label="Verifique que su correo esté(s) bien escrito. Ahí enviaremos su boleta. contraseña y accesos"
                />
              </Grid>
              <div style={{display: 'flex', justifyContent:'flex-end'}}>
                <button type="submit" className="btn btn-success" onClick={handleBlur}>
                  Continuar
                </button>
              </div>
            </form>
          </Grid>
    </>
  );
}

export default ProfileScreen;