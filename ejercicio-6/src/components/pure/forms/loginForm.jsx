import React, { useState } from 'react'
import { User } from '../../../models/user.class'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup'
import {Navigate, Link} from 'react-router-dom'

export default function LoginForm({loggedIn}) {
    if(loggedIn){
        return <Navigate to='/' replace/>
    }

    let user = new User()

    const initialValues = {
        username: '',
        password: '',
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short!')
                .max(12, 'Username too long!')
                .required('Este campo es Requerido!'),
            password: Yup.string()
                .min(8, 'Password too short!')
                .required('This field is required!'),
        }
    )

    return (
        <div>
            <h4>Login Form</h4>
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

                            <label htmlFor="password">Password</label>
                            <Field id='password' type='password' name='password' placeholder='Password'/>

                            {/* Password Errors */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name='password' component='div'/>
                                )
                            }

                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                        </Form>
                    )
                }
            </Formik>
            <h5>No tienes aun una cuenta? <Link to={'/register'}>Registrate ahora</Link></h5>
        </div>
    )
}
