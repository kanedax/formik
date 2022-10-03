import React from 'react';

const PersonalField = ({field , meta , error}) => {
    return (
            <>
                <input {...field}></input>
                {meta.touched && meta.error ? <small>{meta.error}</small> : 
                    null
                }
            </>
    )
}

export default PersonalField;
