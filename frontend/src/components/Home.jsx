import React from 'react'
import {useSelector} from 'react-redux'

const Home = () => {
  const user = useSelector(state => state.userReducer.user)
  console.log(user)
  return (
    <>
    <div className='text-xl text-black'>Welcome User</div>
    <div>{user?.name}</div>
    <div>{user?.username}</div>
    <div>{user?.email}</div>
    <img src={user?.avatar} alt="avatar" />
    <img src={user?.coverImage} alt="coverImage" />
    </>
  )
}

export default Home