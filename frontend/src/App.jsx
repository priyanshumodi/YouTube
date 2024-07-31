import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Healthcheck from './components/Healthcheck'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import PrivateRoutes from './components/utils/PrivateRoutes'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/user/login' element={<Login />}/>
            <Route path='/user/signup' element={<Signup />}/>
            <Route path='/healthcheck' element={<Healthcheck />} />
            <Route path='/' element={<LandingPage/>} />
            <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
