import { useState } from 'react';

export const useValidateForm = (initialState = {}, validateForm) => {
    
    const [formValues, setFormValues] = useState(initialState);
    const [errorForm, setErrorForm] = useState({});
    
    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    
    const handleBlur = ({target}) => {
        handleInputChange({target});
        setErrorForm(validateForm(formValues))
    }

    return [
        formValues,
        errorForm,
        handleInputChange,
        handleBlur,
    ];
    
}