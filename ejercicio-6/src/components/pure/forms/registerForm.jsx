import React, { useState } from 'react'
import { User } from '../../../models/user.class'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'
import {Navigate, Link} from 'react-router-dom'

export default function RegisterForm({loggedIn}) {
    if(loggedIn){
        return <Navigate to='/' replace/>
    }

    let user = new User()

    const initialValues = {
        username: '',
        email: '',
        role: ROLES.USER,
        password: '',
        confirm: '',
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short!')
                .max(12, 'Username too long!')
                .required('Este campo es Requerido!'),
            email: Yup.string()
                .required('Este campo es Requerido!'),
            role: Yup.string().oneOf(Object.values(ROLES), 'You must select a role User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short!')
                .required('This field is required!'),
            confirm: Yup.string()
                .when('password', {
                    is: value => value && value.length > 0,
                    then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match!')
                }).required('This field is required!')
        }
    )

    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                } }
            >
                {
                    ({ values, touched, errors, isSubmitting, handleChange, handleBlue}) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id='username' type='text' name='username' placeholder='Username'/>

                            {/* Username Errors */}
                            {
                                errors.username && touched.username &&
                                (
                                    <ErrorMessage name='username' component='div'/>
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id='email' type='text' name='email' placeholder='Email'/>

                            {/* Email Errors */}
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component='div'/>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field id='password' type='password' name='password' placeholder='Password'/>

                            {/* Password Errors */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name='password' component='div'/>
                                )
                            }

                            <label htmlFor="confirm">Password</label>
                            <Field id='confirm' type='password' name='confirm' placeholder='Confirm password'/>

                            {/* Confirm password Errors */}
                            {
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage name='confirm' component='div'/>
                                )
                            }

                            <button type="submit">Register account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                        </Form>
                    )
                }
            </Formik>
            <h5>Ya tienes una cuenta? Inicia sesión <Link to={'/login'}>Aquí</Link></h5>
        </div>
    )
}
