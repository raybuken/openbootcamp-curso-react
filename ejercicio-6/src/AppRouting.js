import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TaskList from './components/container/TaskList'
import LoginForm from './components/pure/forms/loginForm'
import RegisterForm from './components/pure/forms/registerForm'
import DashBoard from './pages/dashboard/DashBoard'
import NotFound from './pages/notfound/NotFound'

function AppRouting() {
    let loggedIn = true

    return (
    <main>
        <Router>
            <Routes>
                <Route path='/' element={<TaskList loggedIn={loggedIn}/>}/>
                <Route path='dashboard' element={<DashBoard loggedIn={loggedIn}/>}/>
                <Route path='login' element={<LoginForm loggedIn={loggedIn}/>}/>
                <Route path='register' element={<RegisterForm loggedIn={loggedIn}/>}/>
                <Route path='tasks' element={<TaskList loggedIn={loggedIn}/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
    </main>
    )
}

export default AppRouting