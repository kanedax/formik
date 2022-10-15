import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import PersonalError from '../../components/personalError';

const Radio = (props) => {
    const {label , name , options} = props
    return (
        <div className='radio-container'>
            <label>{label}</label>
            <FastField as="Select" name={name} autoComplete='off'>
                {({field})=>{
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input
                                type='radio'
                                id={`radio${o.id}`}
                                {...field}
                                value={o.id}
                                checked={field.value == o.id}
                            >
                            </input>
                            <label>{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    );
}

export default Radio;