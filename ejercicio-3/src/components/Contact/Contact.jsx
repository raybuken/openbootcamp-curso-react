import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contacto.class'

const ContactComponent = ({contact, updateContactStatus, remove}) => {

  return (
    <tr>
        <td>{contact.nombre}</td>
        <td>{contact.apellido}</td>
        <td>{contact.email}</td>
        <td>
            {
                contact.conectado ?
                    (<i onClick={() => updateContactStatus(contact)} className='bi-toggle-on contact-action' style={{color: 'green'}}></i>)
                :   (<i onClick={() => updateContactStatus(contact)} className='bi-toggle-off contact-action' style={{color: 'gray'}}></i>)
            }
            <i onClick={() => remove(contact)} className="bi-trash contact-action" style={{color: 'tomato'}}></i>
        </td>
    </tr>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    updateContactStatus: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent