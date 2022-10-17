import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { Contact } from '../../models/contacto.class'

const ContactForm = ({add}) => {
    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')


    const addContact = (e) => {
        e.preventDefault()
        const newContact = new Contact(nombreRef.current.value, apellidoRef.current.value, emailRef.current.value, true)
        add(newContact)
    }

    return (
        <form onSubmit={addContact}>
            <input placeholder='Nombre' ref={nombreRef} id='contactoNombre' type="text" className="form-control form-control-lg my-2" required autoFocus />
            <input placeholder='Apellido' ref={apellidoRef} id='contactoApellido' type="text" className="form-control form-control-lg my-2" required />
            <input placeholder='Email' ref={emailRef} id='contactoEmail' type="email" className="form-control form-control-lg my-2" required />
            <input className='btn btn-success' type="submit" value="Agregar" />
        </form>
    )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm