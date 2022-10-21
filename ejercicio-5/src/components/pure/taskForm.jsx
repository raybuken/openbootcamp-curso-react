import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const TaskForm = ({ add }) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const initialValues = {
        title: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const taskSchema = yup.object().shape(
        {
            title: yup.string()
                .required('Title field is required!'),
            description: yup.string()
                .required('Description field is required!'),
            level: yup.string()
                .oneOf(Object.values(LEVELS), 'Level assigned is not valid. Must be normal/urgent/blocking')
                .required('Role Field is required')
        }
    )

    function addTask(e){
        const newTask = new Task(nameRef.current.value, descriptionRef.current.value, false, levelRef.current.value)
        add(newTask)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={taskSchema} onSubmit={async (values, actions) => {
            await new Promise(r => setTimeout(r, 1000));
            addTask()
        }}>
            {({errors, touched, isSubmitting}) => (
                <Form className='d-flex justify-content-center align-items-center mb-4'>
                    <div className="form-outline flex-fill">
                        <hr />
                        <Field id='title' name='title'>
                        {({ field }) => (
                            <input placeholder='Title' ref={nameRef} type="text" className='form-control form-control-lg my-2' autoFocus {...field}/>
                        )}
                        </Field>

                        {errors.title && touched.title &&
                            <ErrorMessage name='title' component='div'/>
                        }

                        <Field id='description' name='description'>
                            {({ field }) => (
                                <input placeholder='Description' ref={descriptionRef} type="text" className='form-control form-control-lg my-2' {...field}/>
                            )}
                        </Field>

                        {errors.description && touched.description &&
                            <ErrorMessage name='description' component='div'/>
                        }

                        <label htmlFor="level" className='sr-only'>Priority</label>

                        <Field id='level' name='level' type= 'select'>
                            {({ field }) => (
                                <select className='form-select my-2' ref={levelRef} {...field}>
                                    {Object.keys(LEVELS).map((level, i) => (<option key={i} value={level.toLowerCase()}>{level}</option>))}
                                </select>
                            )}
                        </Field>

                        {errors.level && touched.level &&
                            <ErrorMessage name='level' component='div'/>
                        }

                        <button type="submit" className='btn btn-success'>Add</button>

                        {isSubmitting && (
                            <p>Enviando solicitud...</p>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm