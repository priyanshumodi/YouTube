import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Healthcheck from './components/Healthcheck'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/user/login' element={<Login />}/>
            <Route path='/user/signup' element={<Signup />}/>
            <Route path='/healthcheck' element={<Healthcheck />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
