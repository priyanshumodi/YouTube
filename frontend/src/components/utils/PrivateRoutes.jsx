import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const isAuthenticated = useSelector(state => state.userReducer.isAuthenticated)
  let message = ""
  if(!isAuthenticated)
    message = "unAuthorized login first" 
  return isAuthenticated ? <Outlet /> : <Navigate to="/user/login" replace state={{ message }} />
}

export default PrivateRoutes