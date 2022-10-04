import { ErrorMessage, FastField, FieldArray, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { object } from 'yup/lib/locale';
import PersonalError from './personalError';
import PersonalFavourite from './personalFavourite';
import PersonalField from './personalField';

const initialValues = {
    userName:'',
    password:'',
    email:'',
    bio:'',
    address:{
        city:'',
        postalCode:'',
    },
    phone:['',''],
    favourite:[''],
}
 const onSubmit = values=>{
    console.log(values)
}

const validationSchema = yup.object({
    userName : yup.string().required('لطفا این قسمت را پر کنید'),
    password : yup.string().required('لطفا این قسمت را پر کنید').min(6,'حداقل 6 کاراکتر را وارد کنید'),
    email : yup.string().required('لطفا این قسمت را پر کنید').email('لطفا قالب ایمیل را رعایت کنید'),
    address: yup.object({
        city: yup.string().required('لطفا این قسمت را پر کنید'),
        postalCode: yup.string().required('لطفا این قسمت را پر کنید'),
    }),
    phone: yup.array().of(yup.string().required('لطفا این قسمت را پر کنید')),
    favourite : yup.array().of(yup.string().required('لطفا این قسمت را پر کنید')),
})
const From = () => {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnBlur={false}
        // validateOnChange={false}
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
                        <label>نام شهر </label>
                        <FastField type="text" name='address.city'/>
                        <ErrorMessage name='address.city' component={PersonalError}/>
                        <label>کد پستی </label>
                        <FastField type="text" name='address.postalCode'/>
                        <ErrorMessage name='address.postalCode' component={PersonalError}/>
                        <label> شماره موبایل </label>
                        <FastField type="text" name='phone[0]'/>
                        <ErrorMessage name='phone[0]' component={PersonalError}/>
                        <label>شماره ثابت  </label>
                        <FastField type="text" name='phone[1]'/>
                        <ErrorMessage name='phone[1]' component={PersonalError}/>
                        <FieldArray name='favourite'>
                            {props=>
                                <PersonalFavourite {...props}/> 
                            }
                        </FieldArray>
                        <button className='submit' type='submit'>ورود</button>
                    </Form>
                </div>
            </div>
        </Formik>
    );
}

export default From;
