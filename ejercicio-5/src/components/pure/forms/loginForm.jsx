import React, { useState } from 'react'


export default function LoginForm() {

    const initialCredentials = [{
        user: '',
        password: ''
    }]

    const [credentials, setCredentials] = useState(initialCredentials)

    return (
        <div>loginForm</div>
    )
}
