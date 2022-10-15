import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from '../../components/personalError';

const Input = (props) => {
    const {type , label , name} = props
    return (
        <div>
            <label>{label}</label>
            <FastField type={type} name={name} autoComplete='off'/>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    );
}

export default Input;
