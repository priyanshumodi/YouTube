import React, { useEffect, useState } from 'react'
import LeftNav from '../LeftNav/LeftNav'
import { fetchDataFromApi } from '../utils/api'
import { useParams } from 'react-router-dom'
import PlaylistVideo from './PlaylistVideo'


const Playlist = () => {
    const {id} = useParams()
    const [playlist, setPlaylist] = useState({});
    useEffect(() => {
        fetchPlaylistVideo()
    }, [])
    
    const fetchPlaylistVideo = async() => {
        const result = await fetchDataFromApi(`playlist/${id}`);
        console.log(result)
        setPlaylist(result)
    }
  return (
    <div>
        <div className='flex flex-row h-[calc(100%-56px)] bg-black'>
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-[700px] overflow-y-auto bg-black">
                <div className="bg-background text-foreground p-4">
                    {true && 
                    <div className="relative">
                    <img className="w-full h-40 object-cover rounded-lg" src={"https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D"} alt="Cover Image" />
                    </div>
                    }
                    <div className="flex">
                        <div className="ml-4 pt-7 flex flex-col gap-1">
                          <p className="text-white text-xl">{playlist?.name}</p>
                          <p className="text-zinc-400">{playlist?.description}</p>
                        </div>                
                    </div>
                    <div className='border-white border-t mt-3'>
                    </div>
                    {/* video */}
                    <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                        {playlist?.videos?.map((item, index) => {
                            if (!item) return false;
                            return (
                              <PlaylistVideo 
                              key={item}
                              id={item}
                              />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playlist