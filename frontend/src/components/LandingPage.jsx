import React,{useEffect} from 'react'
import ytLogo from '../assets/images/yt-logo-mobile.png'
import { useNavigate } from 'react-router-dom'
import {authenticate} from './utils/authenticate'

const LandingPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      authenticate(navigate);
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='flex items-center justify-center h-screen bg-black'>
        <img src={ytLogo} alt="YouTube Logo" className='h-14'/>
    </div>
    
  )
}

export default LandingPage