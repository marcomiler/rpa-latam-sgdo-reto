import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SelectList from './SelectList';
import {getProvincias} from '../../helpers/getProvincias';
import {getDistritosByProvincia} from '../../helpers/getDistritosByProvincia';
import { useValidateForm } from '../../hooks/useValidateForm';
import { validationReparto } from '../../helpers/validations/validationReparto';
import { getDetails } from '../../helpers/getDetails';

let styles = {
  color: "#dc3545"
}

export default function ReviewScreen( {handleBack, handleNext} ) {
  
  const details = getDetails();
  const prov = getProvincias();
  const storage = localStorage.getItem('address');
  const data = JSON.parse(storage);

  let initialValues = {};

  if(storage){
    initialValues = {
      dpwnProvincia: data.dpwnProvincia,
      dpwnDistrito: data.dpwnDistrito,
      address: data.address,
      reference: data.reference,
      dpwnDetails: data.dpwnDetails
    }
  }else {
    initialValues = {
      dpwnProvincia: '',
      dpwnDistrito: '',
      address: '',
      reference: '',
      dpwnDetails: ''
    }
  }

  const [ 
    formValues,
    errorForm,
    handleInputChange,
    handleBlur 
    ] = useValidateForm(initialValues, validationReparto);
  
  const {
    dpwnProvincia,
    dpwnDistrito,
    address,
    reference,
    dpwnDetails
  } = formValues;

  validationReparto(formValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('address', JSON.stringify(formValues));
    if(Object.keys(errorForm).length === 0){
      handleNext();
    }
  }

  return (
    <>
      <Typography variant="h5" gutterBottom className="fw-bold">
        Direccion de reparto
      </Typography>
      <Grid className="mt-3">
        <form onSubmit={ handleSubmit }>
          <Grid item lg={8} sm={12} className="mt-2">
            <label>Provincia</label>
            <SelectList 
              helper={ prov }
              name="dpwnProvincia"
              value={ dpwnProvincia }
              handleInputChange={ handleInputChange }
            />
          </Grid>

          <Grid item lg={8} sm={12} className="mt-2">
          <label>Distrito</label>
            {
              <SelectList 
              helper={ dpwnProvincia 
                ? getDistritosByProvincia(dpwnProvincia) 
                : getDistritosByProvincia("Lima")
              }
              name="dpwnDistrito"
              value={ dpwnDistrito }
              handleChange= { handleInputChange }
              />
            }
          </Grid>

          <Grid item lg={8} sm={12} className="mt-2">
            <label htmlFor="address">Dirección donde llegará el diario</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Ejemplo: San Miguel 1546. Calle..."
              className="form-control"
              autoComplete="off"
              value={ address }
              onChange={ handleInputChange }
              label="Dirección donde llegará el diario"
            />
            { errorForm.address && <p style={styles}>{ errorForm.address }</p> }
          </Grid>

          
          <Grid item lg={8} sm={12} className="mt-2">
          <label htmlFor="reference">Referencia</label>
            <input
              id="reference"
              name="reference"
              type="text"
              placeholder="Escribe aquí referencias de avenidas"
              value={ reference }
              className="form-control"
              onChange={ handleInputChange }
              label="Referencia"
              fullWidth
              autoComplete="reference"
            />
            { errorForm.reference && <p style={styles}>{ errorForm.reference }</p> }
          </Grid>

          <Grid item lg={8} sm={12} className=" mt-2">
            <label htmlFor="reference">Detalle</label>
            <select 
              className="btn col-12 border" 
              data-bs-toggle="dropdown" 
              name="dpwnDetails"
              onChange={ handleInputChange }
              value={ dpwnDetails }
            > 
            { details.map(( det, index ) => ( <option key={ index }>{ det }</option> ))}
            </select>
          </Grid>
          <div className="m-2" style={{display: 'flex', justifyContent:'flex-end'}}>
                <button className="btn btn-secondary mr-1" onClick={handleBack}>Volver</button>
                <button type="submit" className="btn btn-success " onClick={handleBlur}>Continuar</button>
            </div>
        </form>
        
      </Grid>
    </>
  );
}