import { isCreditCard, isNumeric } from "validator";

export const validationPayment = (formValues) => {

    let errors = {};
    const regexFec = /^(0\d|[0-3][0-9])\/\d{4}$/;

    var fec = formValues.fvencimiento;
    var subsFecYear = fec.substring(3,7);
    var subsFecMonth = fec.substring(0,2);
    var date = new Date();
    var dateYear = date.getFullYear();     
    
    if(formValues.checkPlan === "" || !formValues.checkPlan){
        errors.checkPlan = "Campo requerido";
    }

    if(!formValues.cardNumber.trim()){
        errors.cardNumber = "Campo requerido";
    }else if (!isCreditCard(formValues.cardNumber)) {
        errors.cardNumber = "Número de tarjeta inválida";
    }


    if(!formValues.fvencimiento.trim()){
        errors.fvencimiento = "Campo requerido";
    }else if( !regexFec.test(formValues.fvencimiento)) {
        errors.fvencimiento = "No coindice con el formato";
    }else if( subsFecYear < dateYear) {
        errors.fvencimiento = "No puede ser menor a la fecha actual";
    }else if( subsFecMonth === "00") {
        errors.fvencimiento = "El mes no es válido";
    }else if( subsFecYear > dateYear + 5) {
        errors.fvencimiento = "El año no es válido";
    }
    

    if(!formValues.cvv.trim()){
        errors.cvv = "Campo requerido";
    }else if (!isNumeric(formValues.cvv)){
        errors.cvv = "Solo dígitos";
    }else if (formValues.cvv.length !== 3){
        errors.cvv = "Este campo requiere 3 dígitos";
    }
    
    return errors;
}
