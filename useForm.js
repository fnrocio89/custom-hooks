import { useState } from "react";


export const useForm = (initialValueForm = {}) => {


    const [formState, setFormState] = useState(initialValueForm);

    // const { userName, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value, } = target;

        setFormState({
            ...formState,
            [name]: value
        });         


    }

    const onResetForm = ()=> (setFormState(initialValueForm));

    
    return {
        ...formState,
        formState,
        setFormState,        
        onInputChange,
        onResetForm

    }

}
