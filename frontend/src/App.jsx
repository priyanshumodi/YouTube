import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Healthcheck from './components/Healthcheck'
import LandingPage from './components/LandingPage'

import PrivateRoutes from './components/utils/PrivateRoutes'
import axios  from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from './features/auth/userSlice'
import UserDetail from './components/userdetail/UserDetail'
import Layout from './components/Layout/Layout'
import Feed from './components/Home/Feed'
import SearchResult from './components/SearchResult/SearchResult'
import VideoDetails from './components/Video/VideoDetails'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchUserData()
  },[])

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/v1/users/current-user');
      const result = response.data
      console.log('api response',result)
      dispatch(addUser(result.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/user/login' element={<Login />}/>
            <Route path='/user/signup' element={<Signup />}/>
            <Route path='/healthcheck' element={<Healthcheck />} />
            <Route path='/' element={<LandingPage/>} />
            
            <Route path='/user/detail' element={<UserDetail/>} />

            <Route path='/app' element={<PrivateRoutes><Layout /></PrivateRoutes>}>
                <Route index exact element={<PrivateRoutes><Feed /></PrivateRoutes>} />
                <Route path='searchResult/:searchQuery' element={<PrivateRoutes><SearchResult /></PrivateRoutes>}/>
                <Route path='video/:id' element={<PrivateRoutes><VideoDetails /></PrivateRoutes>} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
