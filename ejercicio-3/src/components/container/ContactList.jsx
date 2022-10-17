import React from 'react'
import { useState } from 'react'
import { Contact } from '../../models/contacto.class'
import ContactComponent from '../Contact/Contact'

import '../../styles/contactList.css'
import ContactForm from '../forms/ContactForm'

const ContactList = () => {
    const contact1 = new Contact('Ray', 'Peña', 'mail@example.com', true)
    const contact2 = new Contact('Nurys', 'Sanchez', 'nurys@example.com', true)
    const contact3 = new Contact('Franchesco', 'Virgolinni', 'franchesco@example.com', false)

    const [contacts, setContacts] = useState([contact1, contact2, contact3])


    const updateContactStatus = (contact) => {
        const index = contacts.indexOf(contact)
        const newContacts = [...contacts]

        newContacts[index].conectado = !newContacts[index].conectado

        setContacts(newContacts)
    }

    const removeContact = (contact) => {
        const index = contacts.indexOf(contact)
        const newContacts = [...contacts]
        newContacts.splice(index, 1)

        setContacts(newContacts)
    }

    const createContact = (contact) => {
        setContacts([...contacts, contact])
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Apellido</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                contacts.map((contact, i) => <ContactComponent key={i} contact={contact} updateContactStatus={updateContactStatus} remove={removeContact}/>)
                            }
                        </tbody>
                    </table>
                    <ContactForm add={createContact}/>
                </div>
            </div>
        </div>
    )
}

export default ContactList