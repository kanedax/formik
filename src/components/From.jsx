import { ErrorMessage, FastField, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import PersonalError from './personalError';
import PersonalField from './personalField';

const initialValues = {
    userName:'',
    password:'',
    email:'',
    bio:'',
}
 const onSubmit = values=>{
    console.log(values)
}

const validationSchema = yup.object({
    userName : yup.string().required('لطفا این قسمت را پر کنید'),
    password : yup.string().required('لطفا این قسمت را پر کنید').min(6,'حداقل 6 کاراکتر را وارد کنید'),
    email : yup.string().required('لطفا این قسمت را پر کنید').email('لطفا قالب ایمیل را رعایت کنید'),
})
const From = () => {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <div className='main-container'>
                <div className='form-container'>
                    <Form className='main-form'> 
                        <label>نام کاربری</label>
                        <FastField type="text" name='userName' autoComplete='off'/>
                        <ErrorMessage name='userName' component={PersonalError}/>
                        <label>کلمه عبور</label>
                        <FastField type="password" name='password'>
                            {props=><PersonalField {...props}/>}
                        </FastField>
                        <label>ایمیل</label>
                        <FastField type="email" name='email'/>
                        <ErrorMessage name='email'>
                            {error=><div className='error-message'>{error}</div>}
                        </ErrorMessage>
                        <label>بیوگرافی</label>
                        <FastField type="text" name='bio' component='textarea' />
                        <button className='submit' type='submit'>ورود</button>
                    </Form>
                </div>
            </div>
        </Formik>
    );
}

export default From;
