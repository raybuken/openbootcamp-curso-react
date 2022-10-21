import React from 'react'
import Button from '@mui/material/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import Copyright from '../../components/pure/Copyright'

function DashBoard({loggedIn}) {
    const navigate = useNavigate()

    if(!loggedIn){
        return <Navigate to='/login' replace/>
    }

    const logout = () => {
        navigate('/login', { replace: true })
    }

    return (
        <div>
            <Button variant='contained' onClick={logout}>Logout</Button>
            <Copyright/>
        </div>
    )
}

export default DashBoard