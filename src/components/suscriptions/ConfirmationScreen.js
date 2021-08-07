import { Grid, Typography } from '@material-ui/core';
import React from 'react'

const ConfirmationScreen = () => {
    return (
        <>
          <Typography variant="h5" gutterBottom className="fw-bold">
            Tu compra fue realizada
          </Typography>  
          <Grid>
              <strong>Paquete</strong>
              <p>Plan Anual</p>

              <strong>Nombre</strong>
              <p>Jeronimo Romero</p>

              <strong>Precio</strong>
              <p>S/ 125</p>

              <p>El precio de la suscripción se cargará automaticamente a tu tarjeta
                 cada mes o año, según el periodo elegido.
              </p>

              <p>Enviaremos la boleta de compra de la suscripción al correo:</p>
              <b>ramoncito@gmail.com</b>
          </Grid>
            
            <button className="btn btn-info text-white">
                Seguir navegando
            </button>
        </>
    )
}

export default ConfirmationScreen;
