import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

const UserDetail = () => {
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
  }, [])
  return (
    <>
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