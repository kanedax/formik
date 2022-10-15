import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from '../../components/personalError';

const Select = (props) => {
    const {label , name , options} = props
    return (
        <div>
            <label>{label}</label>
            <FastField as="Select" name={name} autoComplete='off'>
                {
                    options.map(o=>(
                        <option value={o.id} key={o.id}>{o.value}</option>
                    ))
                }
            </FastField>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    );
}

export default Select;