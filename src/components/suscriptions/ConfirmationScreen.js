import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { suscribedAction } from '../../actions/suscribedAction';

const ConfirmationScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const profile = localStorage.getItem('profile');
    const suscription = localStorage.getItem('suscription');
    const payment = localStorage.getItem('payment');

    const dataProfile = JSON.parse(profile);
    const dataPayment= JSON.parse(payment);
    const dataSuscription = JSON.parse(suscription);

    const { paquetes } = dataSuscription;
    const { checkPlan } = dataPayment;
    const { name, lastname1, lastname2, email } = dataProfile;

    const [ plan ] = paquetes.filter(plan => plan.plan === checkPlan);

    const isSuscribed = {
        suscribed: true
    }

    const handleClick = () => {
        localStorage.removeItem('profile');
        localStorage.removeItem('address');
        localStorage.removeItem('payment');
        localStorage.removeItem('suscription');
        localStorage.setItem('isSuscribed', JSON.stringify(isSuscribed));
        dispatch(suscribedAction());
        history.replace("/")
    }

    return (
        <>
          <Typography variant="h5" gutterBottom className="fw-bold">
            Tu compra fue realizada
          </Typography>  
          <Grid>
              <strong>Paquete</strong>
              <p>{checkPlan}</p>

              <strong>Nombre</strong>
              <p>{`${name} ${lastname1} ${lastname2}`} </p>

              <strong>Precio</strong>
              {/* <p>S/ 125</p> */}
              <p>{ `S/ ${plan.precio}`}</p>

              <p>El precio de la suscripción se cargará automaticamente a tu tarjeta
                 cada mes o año, según el periodo elegido.
              </p>

              <p>Enviaremos la boleta de compra de la suscripción al correo: <br />
              <b>{email}</b>
              </p>

          </Grid>
            
            <button className="btn btn-info text-white" onClick={ handleClick }>
                Seguir navegando
            </button>
        </>
    )
}

export default ConfirmationScreen;
