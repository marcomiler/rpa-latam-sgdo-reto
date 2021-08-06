import { isMobilePhone, isNumeric } from "validator";

export const validationProfile = (formValues) => {

    let errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!formValues.dni.trim()){
        errors.dni = "Campo requerido";
    }else if ( !isNumeric(formValues.dni) ){
        errors.dni = "Solo dígitos";
    } else if (formValues.dni.length > 7 || formValues.dni.length !== 7) {
        errors.dni = "Solo 7 dígitos";
    }

    if(!formValues.name.trim()){
      errors.name = "Campo requerido";
    }else if ( !( regexName.test(formValues.name)) ){
        errors.name = "Solo caracteres de la A-Z";
    }

    if(!formValues.lastname1.trim()){
        errors.lastname1 = "Campo requerido";
    }else if ( !( regexName.test(formValues.lastname1) )){
        errors.lastname1 = "Solo caracteres de la A-Z";
    }

    if(!formValues.lastname2.trim()){
        errors.lastname2 = "Campo requerido";
    }else if ( !( regexName.test(formValues.lastname2)) ){
        errors.lastname2 = "Solo caracteres de la A-Z";
    }

    if(!formValues.phone.trim()){
        errors.phone = "Campo requerido";
    }else if ( !(isMobilePhone(formValues.phone)) ){
        errors.phone = "Solo dígitos";
    }

    if(!formValues.email.trim()){
        errors.email = "Campo requerido";
    }else if ( !regexEmail.test( formValues.email) ){
        errors.email = "Correo electrónico inválido";
    }

    return errors;

}