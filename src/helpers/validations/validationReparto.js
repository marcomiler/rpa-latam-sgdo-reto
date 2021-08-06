
export const validationReparto = (formValues) => {

    let errors = {};

    const regexDirection = /^[#.0-9a-zA-Z\s,-]+$/;

    if(!formValues.address.trim()){
        errors.address = "Campo requerido";
    }else if ( !regexDirection.test(formValues.address) ){
        errors.address = "Ingrese una referencia válida";
    } 

    if(!formValues.reference.trim()){
        errors.reference = "Campo requerido";
    }else if ( !regexDirection.test(formValues.reference) ){
        errors.reference = "Ingrese una dirección válida";
    } 

    return errors;

}