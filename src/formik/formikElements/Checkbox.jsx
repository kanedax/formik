import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import PersonalError from '../../components/personalError';

const Checkbox = (props) => {
    const {label , name , options} = props
    return (
        <div className='checked-container'>
            <label>{label}</label>
            <FastField as="Select" name={name} autoComplete='off'>
                {({field})=>{
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input
                                type='checkbox'
                                id={o.value}
                                {...field}
                                value={o.value}
                                checked={field.value.includes(o.value)}
                            />
                            <label className='checked-label'>{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    );
}

export default Checkbox;