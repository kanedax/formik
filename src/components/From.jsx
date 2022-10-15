import {FieldArray, Form, Formik } from 'formik';
import React, { useState , useEffect } from 'react';
import * as yup from 'yup';
import {object} from 'yup/lib/locale';
import FormikControl from '../formik/formikElements/formikControl';

import PersonalFavourite from './personalFavourite';


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
    educations:1,
    gender:1,
    skills:[],
    
}
 const onSubmit = (values , submitProps)=>{
    setTimeout(() => {
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    }, 3000);
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
    educations : yup.string().required('لطفا این قسمت را پر کنید'),
})

const educations = [
    {id:1 , value:'ابتدایی'},
    {id:2 , value:'سیکل'},
    {id:3 , value:'دیپلم'},
    {id:4 , value:'لیسانس'},
]
const gender = [
    {id:1 , value:'مرد'},
    {id:2 , value:'زن'},
]
const skills = [
    {id:1 , value:'HTML'},
    {id:2 , value:'CSS'},
    {id:3 , value:'JS'},
    {id:4 , value:'REACT'},
]
const From = () => {

    const[saveData , setSavedData] = useState(null);

    const[myValues , setMyValues] = useState(null);

    const handleSaveData = (formik)=>{
        localStorage.setItem('savedData' , JSON.stringify(formik.values))
    }
    const handleGetSaveData = ()=>{
        setMyValues(saveData)
    }
    useEffect(() => {
        const localSavedData = JSON.parse(localStorage.getItem('savedData'));
        setSavedData(localSavedData);
    }, []);

    return (
        <Formik
        initialValues={myValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnBlur={false}
        // validateOnChange={false}

        >
            {formik=>{
                return(
                    <div className='main-container'>
                        <div className='form-container'>
                            <Form className='main-form'>
                                <FormikControl control="input" type="text" label="نام کاربری" name="userName" />
                                <FormikControl control="input" type="password" label="کلمه عبور" name="password" /> 
                                <FormikControl control="input" type="email" label="ایمیل" name="email" /> 
                                <FormikControl control="textarea" label="بیوگرافی" name="bio" />
                                <FormikControl control="input" type="text" label="نام شهر" name="address.city" />
                                <FormikControl control="input" type="text" label="کد پستی" name="address.postalCode" /> 
                                <FormikControl control="input" type="text" label="شماره موبایل" name="phone[0]" /> 
                                <FormikControl control="input" type="text" label="شماره ثابت" name="phone[1]" />
                                <FormikControl control="select" label="تحصیلات" name="educations" options={educations} />
                                <FormikControl control="radio" label="جنسیت" name="gender" options={gender} />
                                <FormikControl control="checkbox" label="مهارت" name="skills" options={skills} />   


                                <FieldArray name='favourite'>
                                    {props=>
                                        <PersonalFavourite {...props}/> 
                                    }
                                </FieldArray>
                                <button className='submit' type='submit' disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} >
                                    {
                                        formik.isSubmitting ?(
                                            <div className="fa-3x">
                                                <i className="fas fa-spinner fa-spin"></i>
                                            </div>    
                                        ) : ("ثبت نام")
                                    }
                                </button>

                                {
                                    (formik.isValid && formik.dirty) ? (
                                        <button onClick={()=>handleSaveData(formik)}>                                            
                                            ذخیره در سیستم                                    
                                        </button>
                                    ):null
                                }
                                {
                                    saveData ? (
                                        <button onClick={handleGetSaveData}>                                            
                                            دریافت اطلاعات                                   
                                        </button>
                                    ):null
                                }
                                {
                                    formik.dirty ? (
                                        <button type='reset'>                                            
                                             ریست فرم                                   
                                        </button>
                                    ):null
                                }
                            </Form>
                        </div>
                    </div>
                )
            }}
        </Formik>
    );
}

export default From;
