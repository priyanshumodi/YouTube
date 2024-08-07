import React,{useState, useEffect} from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import VideoLength from "../shared/VideoLength"
import TimeAgo from '../shared/TimeAgo'
import axios from 'axios'

const VideoCard = ({video}) => {
    const [userName,setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')

    useEffect(() => {
        fetchUserDetails(video?.owner)
    }, [video])

    const fetchUserDetails = async (id) => {
        try {
            const result = await axios.post('/api/v1/users/getUser',{id})
            // console.log(result)
            const user = result.data.data
            // console.log('user',user)
            setUserAvatar(user?.avatar)
            setUserName(user?.fullName)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Link to={`/app/video/${video?._id}`}>
        <div className="flex flex-col mb-8">
            <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={video?.thumbnail}
                />
                {video?.duration && (
                    <VideoLength time={video?.duration} />
                )}
            </div>
            <div className="flex text-white mt-3">
                <div className="flex items-start">
                    <div className="flex h-9 w-9 rounded-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={userAvatar}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-3 overflow-hidden">
                    <span className="text-sm font-bold line-clamp-2">
                        {video?.title}
                    </span>
                    <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                        {userName}
                        {true && (
                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                        )}
                    </span>
                    <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                        <span>{`${abbreviateNumber(
                            video?.views,
                            2
                        )} views`}</span>
                        <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                            .
                        </span>
                        <span className="truncate">
                            <TimeAgo timestamp={video?.createdAt} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
);
}

export default VideoCard