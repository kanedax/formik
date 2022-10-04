import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PersonalError from './personalError';

const PersonalFavourite = (props) => {
    const {form, push, remove} = props;
    const {favourite} = form.values
    return (
        <div>
            <label>علایق</label>
            <i className='fas fa-plus' onClick={()=>push('')} ></i>
            {favourite.map((f,i)=>(
            <div key={i} className='field-container'>
                <Field type='text' name={`favourite[${i}]`}/>
                {
                    favourite.length > 1 ?(
                        <i className='fas fa-minus-circle' onClick={()=>remove(i)} ></i>
                    ) : null
                }
                <ErrorMessage name={`favourite[${i}]`} component={PersonalError}/>
            </div>    
            ))}
        </div>
    );
}

export default PersonalFavourite;
