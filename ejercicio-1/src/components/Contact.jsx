import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contacto.class'

export default function ContactComponent({contact}) {

    return (
        <div>
            <h2>Nombre: {contact.nombre}</h2>
            <h2>Apellido: {contact.apellido}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Conectado: <b>{contact.conectado ? 'Contacto En Línea' : 'Contacto No  Disponible'}</b></h4>
        </div>
    )
}


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}