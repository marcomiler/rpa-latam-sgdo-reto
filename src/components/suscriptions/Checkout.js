import React, { useState } from 'react';
import Step from '@material-ui/core/Step';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';

import Header from '../ui/Header';
import PaymentScreen from './PaymentScreen';
import RepartoScreen from './RepartoScreen';
import ProfileScreen from './ProfileScreen'    
import ConfirmationScreen from './ConfirmationScreen';
import { useStyles } from './makeStyles';

const steps = ['Perfil', 'Reparto', 'Datos de Pago', 'Confirmación'];

export default function Checkout() {
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ProfileScreen handleNext={handleNext}/>;
        case 1:
        return <RepartoScreen handleBack={ handleBack } handleNext={handleNext}/>;
        case 2:
          return <PaymentScreen handleBack={ handleBack } handleNext={handleNext}/>;
        case 3:
          return <ConfirmationScreen/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Header />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {getStepContent(activeStep)}
          </>
        </Paper>
      </main>
    </>
  );
}