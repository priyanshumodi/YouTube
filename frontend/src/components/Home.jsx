import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie';

const Home = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [accessToken, setAccessToken] = useState(Cookies.get('accessToken'))
  console.log(accessToken)
  
  useEffect(() => {
    const user = useSelector(state => state.userReducer.user)
    console.log(user)
    setName(user.name)
    setUsername(user.username)
    setEmail(user.email)
    setAvatar(user.avatar)
    setCoverImage(user.coverImage)
  }, [accessToken])
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

export default Home