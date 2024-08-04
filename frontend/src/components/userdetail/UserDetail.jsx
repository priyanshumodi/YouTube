import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../../features/auth/userSlice'

const UserDetail = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [coverImage, setCoverImage] = useState('')
  
  const user = useSelector(state => state.userReducer.user)
  useEffect(() => {
    console.log(user)
    setName(user.name)
    setUsername(user.username)
    setEmail(user.email)
    setAvatar(user.avatar)
    setCoverImage(user.coverImage)
  }, [user])

  const dispatch = useDispatch()

  const handlClick = async () => {
    const response = await axios.post('/api/v1/users/logout')
    console.log(response)
    dispatch(removeUser())
    navigate('/')
  }
  return (
  
    <>
    <button onClick={handlClick} type="submit" className="w-full bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        LogOut
    </button>
    <div className='text-xl text-black'>Welcome User</div>
    <div>{name}</div>
    <div>{username}</div>
    <div>{email}</div>
    <img src={avatar} alt="avatar" />
    <img src={coverImage} alt="coverImage" />
    </>
  )
}

export default UserDetail