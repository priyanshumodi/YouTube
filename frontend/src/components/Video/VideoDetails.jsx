import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'

import {fetchDataFromApi} from "../utils/api"
import { useDispatch } from 'react-redux'
import SuggestionVideoCard from "./SuggestionVideoCard"
import { toggleLoading } from '../../features/hooks/hookSlice'
import axios from 'axios'
import Comment from './Comment'


const VideoDetails = () => {

  const dispatch = useDispatch()

  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();

  const [userName,setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id])

  useEffect(() => {
    if(video?.owner)
    fetchVideoUser(video?.owner)
}, [video])


  const fetchVideoUser = async (owner) => {
    try {
        const result = await axios.post('/api/v1/users/getUser',{owner})
        // console.log(result)
        const user = result.data.data
        console.log('user',user)
        setUserAvatar(user?.avatar)
        setUserName(user?.fullName)
    } catch (error) {
        console.log(error)
    }
}

  const fetchVideoDetails = () => {
    dispatch(toggleLoading())
    fetchDataFromApi(`/videos/${id}`).then((res) => {
      // console.log("get video detail",res);
      setVideo(res);
      dispatch(toggleLoading())
    })
  }

  const fetchRelatedVideos = () => {
    dispatch(toggleLoading())
    fetchDataFromApi(`/videos`).then((res) => {
      // console.log("get related video ",res.docs);
      setRelatedVideos(res.docs);
      dispatch(toggleLoading())
    })
  }
  return (
    <div className="flex justify-center flex-row h-auto bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row h-auto">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-500px)] px-4 py-3lg:pyoverflow-y-auto pl-12">
          {/* video player */}
          <div className="h-[200px] md:h-[400px] lg:h-[400px]  ml-[-16px] lg:ml-0 mr-[-16plg:mr-0">
            <ReactPlayer
                url={video?.videoFile}
                controls
                width="100%"
                height="100%"
                style={{backgroundColor: "#000000"}}
                playing={true}
            />
          </div>
          {/* video details */}
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img 
                    className='h-full w-full object-cover'
                    src={userAvatar}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {userName}
                  {true && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/ml-4">
                {`${abbreviateNumber(
                  video?.views,
                  2
                )} Views`}
              </div>
            </div>
          </div>
          <div className='border-white border-t mt-3'>
          </div>
          
          {/* comment section starts */}
          {video?._id && <Comment video={video}/> }
        </div>
        {/* related video */}
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.map((item, index) => {
            if (!item) return false;
            return (
              <SuggestionVideoCard
                key={index}
                video={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails