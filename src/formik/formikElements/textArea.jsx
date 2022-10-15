import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from '../../components/personalError';

const TextArea = (props) => {
    const {label , name} = props
    return (
        <div>
            <label>{label}</label>
            <FastField as="textarea" name={name} autoComplete='off'/>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    );
}

export default TextArea;
