import React from 'react'
import { Contact } from '../../models/contacto.class'
import ContactComponent from '../Contact'

function ContactList() {
    const contact = new Contact('Ray', 'Peña', 'ray@mail.com', true)

    return (
        <div>
            Lista de Contactos:
            <div>
                <ContactComponent contact={contact} />
            </div>
        </div>
    )
}

export default ContactList
