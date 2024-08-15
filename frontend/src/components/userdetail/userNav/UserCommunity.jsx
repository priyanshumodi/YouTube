import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const UserCommunity = () => {
  const user = useSelector(state => state.userReducer.user)
  return (
    <>
        {/* add post */}
        <div className="bg-card m-4 rounded-2xl shadow-md border-2 border-solid border-zinc-700 bg-neutral-800">
          <div className='p-4'>
            <div className="flex items-center mb-2">
                <img src={user?.avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-2 object-cover" />
                <span className="text-foreground font-semibold text-white">priyanshu modi</span>
            </div>
            <textarea 
            type="text" 
            className='w-full bg-neutral-800 text-muted-foreground mb-4 text-white'
            >
              Give a shoutout! Type @ to mention a channel
            </textarea>
            {/* <div className="flex space-x-4 mb-4">
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded">Image</button>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded">Image poll</button>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded">Text poll</button>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded">Quiz</button>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded">Video</button>
            </div> */}
            <div className="flex justify-between items-center text-white">
                <span className="text-muted-foreground">Visibility: Public</span>
                <div className='flex'>
                    <button className="ml-2 text-white hover:text-muted px-4 py-2 rounded-3xl hover:bg-white/[0.20]">Cancel</button>
                    <button className={`ml-4 ${true ? "text-black bg-customBlue" : "bg-white/[0.15] text-zinc-400"} hover:bg-primary/80 px-4 py-2 rounded-3xl font-medium`} >Post</button>
                </div>
            </div>
          </div>
        </div>
        {/* all post */}
        <div className="bg-card m-4 rounded-2xl shadow-md border-2 border-solid border-zinc-700">
          <div className='p-4'>
              <div className="flex items-center mb-2">
            <img src={user?.avatar} alt="User Avatar" className="rounded-full mr-2 h-10 w-10 object-cover" />
            <div className='space-x-6'>
              <span className="font-semibold text-white">Nishant Chahar</span>
              <span className="text-muted-foreground text-sm text-zinc-400">1 month ago (edited)</span>
            </div>
              </div>
              <p className="text-foreground mb-2 text-white">
            Mere BCA aur BSc computer science wale dosto ke liye special video! Bhaut zyada doubts aate the i know related to BCA kya kare, kya na kare!
              </p>
              <p className="text-muted-foreground mb-2 text-white">Milte hai 12:30 fir 🚀 …</p>
              <div className="flex items-center">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mr-2 text-white flex items-center">
              <span className='p-[7px] rounded-full hover:bg-zinc-600'><AiOutlineLike /></span> <span>299</span> 
            </button>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-white flex items-center">
              <span className='p-[7px] rounded-full hover:bg-zinc-600'><BiCommentDetail /></span> <span>9</span>
            </button>
              </div>
          </div>
        </div>
    </>
  )
}

export default UserCommunity

