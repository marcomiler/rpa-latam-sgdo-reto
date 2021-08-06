import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function PaymentScreen({handleNext, handleBack}) {

  const storage = localStorage.getItem('suscription');
  const data = JSON.parse(storage);
  const { paquetes } = data
  return (
    <>
      <Typography variant="h5" gutterBottom className="fw-bold" >
        Datos de pago
      </Typography>
      <Typography variant="h6" gutterBottom className="fw-bold">
        { data.tipo }
      </Typography>

      <Grid>
        <form>
          <Grid item lg={8} sm={12} >
          <div className="row m-2" style={{display: 'flex', flexDirection:'column'}}>
            {
              paquetes.map(plan => (
                <span className="form-check-label">
                  <input 
                    key={ plan }
                    className="form-check-input" 
                    type="radio" name="checkPlan" />
                  {plan.plan} {`(${plan.precio})`}
                </span>
              ))
            }
          </div>
          </Grid>

          <Grid item sm={12} lg={8} className=" mt-3">
            <label htmlFor="cardNumber">Número de tarjeta</label>
            <input
              id="cardNumber" 
              name="cardNumber"
              type="text"
              placeholder="**** **** **** ****"
              className="form-control"
              autoComplete="off"
            />
          </Grid>
          <div className="row">
            <Grid item xs={12} lg={4} className=" mt-2">
              <label htmlFor="fvencimiento">Fecha de vencimiento</label>
              <input
                id="fvencimiento"
                name="fvencimiento"
                type="text"
                className="form-control"
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} lg={2} className=" mt-2">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                name="cvv" 
                className="form-control"
                autoComplete="off"
              />
            </Grid>
          </div>

          <div className="m-2" style={{display: 'flex', justifyContent:'flex-end'}}>
            <button className="btn btn-secondary mr-1" onClick={handleBack}>Volver</button>
            <button type="submit" className="btn btn-success ">Continuar</button>
          </div>

        </form>
      </Grid>
    </>
  );
}