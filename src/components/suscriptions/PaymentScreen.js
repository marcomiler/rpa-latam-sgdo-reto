import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useValidateForm } from '../../hooks/useValidateForm';
import { validationPayment } from '../../helpers/validations/validationPayment';

let styles = {
  color: "#dc3545"
}

const PaymentScreen = ({handleBack, handleNext}) => {
  
  const storage = localStorage.getItem('suscription');
  const dataPayment = localStorage.getItem('payment');
  const payment = JSON.parse(dataPayment);

  const data = JSON.parse(storage);
  const { paquetes } = data;
  let initialValue = {}

  if(payment){
    initialValue = {
      checkPlan: payment.checkPlan,
      cardNumber: payment.cardNumber,
      fvencimiento: payment.fvencimiento,
      cvv: payment.cvv
    }
  }else{
    initialValue = {
      checkPlan: '',
      cardNumber: '',
      fvencimiento: '',
      cvv: ''
    }
  }
  const [ 
    formValues,
    errorForm,
    handleInputChange,
    handleBlur ] = useValidateForm(initialValue, validationPayment);
    
    const {
      cardNumber,
      fvencimiento,
      cvv
    } = formValues;
    
  validationPayment(formValues);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    localStorage.setItem('payment', JSON.stringify(formValues));
    if(Object.keys(errorForm).length === 0){
      handleNext();
    }
  }

  return (
    <>
      <Typography variant="h5" gutterBottom className="fw-bold" >
        Datos de pago
      </Typography>
      <Typography variant="h6" gutterBottom className="fw-bold">
        { data.tipo }
      </Typography>

      <Grid>
        <form onSubmit={ handleSubmit }>
          <Grid item lg={8} sm={12} >
          <div className="row m-2" style={{display: 'flex', flexDirection:'column'}}>
            {
              paquetes.map(plan => (
                <label htmlFor={plan.id} >
                <input 
                    key={ plan.id }
                    type="radio" 
                    name="checkPlan"
                    value={ plan.plan }
                    onChange={ handleInputChange }
                    className="form-check-input"
                  />
                  {plan.plan} {`( S/ ${ plan.precio } )`}
                </label>
              ))
            }
            { errorForm.checkPlan && <p style={styles}>{ errorForm.checkPlan }</p> }
          </div>
          </Grid>

          <Grid item sm={12} lg={8} className="mt-3">
            <label htmlFor="cardNumber">Número de tarjeta</label>
            <input
              id="cardNumber" 
              name="cardNumber"
              type="text"
              maxLength="16"
              value={ cardNumber }
              onChange={ handleInputChange }
              placeholder="**** **** **** ****"
              className="form-control"
              autoComplete="off"
            />
            { errorForm.cardNumber && <p style={styles}>{ errorForm.cardNumber }</p> }
          </Grid>
          <div className="row">
            <Grid item xs={5} lg={3} className="mt-2">
              <label htmlFor="fvencimiento">Fecha de vencimiento</label>
              <input
                id="fvencimiento"
                name="fvencimiento"
                type="text"
                placeholder="Mes/Año(**/****)"
                maxLength="7"
                value={ fvencimiento }
                onChange={ handleInputChange }
                className="form-control"
                autoComplete="off"
              />
              { errorForm.fvencimiento && <p style={styles}>{ errorForm.fvencimiento }</p> }
            </Grid>

            <Grid item xs={3} lg={2} className="mt-2">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                name="cvv" 
                type="text"
                value={ cvv }
                maxLength="3"
                placeholder="***"
                onChange={ handleInputChange }
                className="form-control"
                autoComplete="off"
              />
              { errorForm.cvv && <p style={styles}>{ errorForm.cvv }</p> }
            </Grid>

            <Grid item xs={4} lg={4} className="mt-3" style={{display:'flex', alignItems:'center', flexDirection:'row'}}>
              <img src="https://suscripciones.elcomercio.pe/static/partners/comercio/img/icon-card.png" alt="logo cvv" />
              <p className="d-none d-sm-block">Se encuentra al reverso de su tarjeta</p>
            </Grid>
          </div>

          <div className="m-2" style={{display: 'flex', justifyContent:'flex-end'}}>
            <button className="btn btn-secondary mr-1" onClick={handleBack}>Volver</button>
            <button type="submit" className="btn btn-success " onClick={ handleBlur } >Confirmar pago</button>
          </div>

        </form>
      </Grid>
    </>
  );
}

export default PaymentScreen;