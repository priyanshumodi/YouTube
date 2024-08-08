import React,{useState, useEffect} from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { fetchDataFromApi } from '../utils/api';
import TimeAgo from '../shared/TimeAgo';

const Comment = ({video}) => {
    const [isActiveComment, setIsActiveComment] = useState(false);
    const [comment, setComment] = useState('')
    const [videoComment, setVideoComment] = useState(null)

    useEffect(() => {
      fetchDataForVideoComments()
    }, [video])

    const fetchDataForVideoComments = async () => {
      const options = {
        params: {
          page: 1,
          limit: 10,
        },
      }
      
      const result = await fetchDataFromApi(`comments/${video?._id}`,options);
      // console.log(result)
      setVideoComment(result)
    }

    useEffect(() => {
        if(comment.trim() === '') {
          setIsActiveComment(false)
        } else {
          setIsActiveComment(true)
        }
      }, [comment])
    
    const handleCommentChange = (e) => {
        const newComment = e.target.value
        setComment(newComment)
      }

  return (
    <div>
        {/* add comment */}
        <div className="bg-card p-4 rounded-lg shadow-md dark:shadow-lg">
              <h2 className="text-lg font-semibold text-white">71 Comments</h2>
              <div className="flex items-center mt-4">
                <img src="http://res.cloudinary.com/priyanshu7/image/upload/v1720862753/zl04rns9qldmgod53acf.jpg" alt="User Avatar" className="w-11 h-11 rounded-full mr-4 object-cover" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  onChange={handleCommentChange}
                  name='comment'
                  value={comment}
                  className="flex-grow p-2 border border-border text-white rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-black"
                />
                <div className='flex flex-col'>
                    <button className="ml-2 text-white hover:text-muted px-4 py-2 rounded-3xl hover:bg-white/[0.20]">Cancel</button>
                    <button className={`ml-4 ${isActiveComment ? "text-black bg-blue-500" : "bg-white/[0.15] text-zinc-400"} hover:bg-primary/80 px-4 py-2 rounded-3xl font-medium`} >Comment</button>
                </div>
              </div>
              {/* <div className="flex justify-between items-center mt-4">
                <span className="text-muted-foreground dark:text-muted-foreground">Sort by</span>
                <button className="text-muted-foreground hover:text-muted-foreground/80 dark:text-muted-foreground dark:hover:text-muted-foreground/80">Sort Options</button>
              </div> */}
          </div>
          {/* all comments of video */}
          <div className="bg-background p-4 rounded-lg shadow-md mt-3">
            <ol>
              {videoComment?.map((item) => (
              <li key={item?.comment?._id}>
                  <div className="flex items-start mb-4">
                      <img src={item?.comment?.owner?.avatar} className="w-10 h-10 rounded-full mr-4 object-cover" />
                      <div className="flex-1 text-white">
                      <p className="font-semibold text-foreground">
                    @{item?.comment?.owner?.username} <span className="text-muted text-zinc-500 text-sm">{<TimeAgo timestamp={item?.comment?.createdAt} />}</span>
                      </p>
                      <p className="text-muted-foreground text-gray-200 text-sm">{item?.comment?.content}</p>
                      <div className="flex items-center mt-2">
                    <button className="text-muted hover:text-muted-foreground p-[7px] rounded-full hover:bg-zinc-600">
                        <AiOutlineLike className="text-xl text-white" />
                    </button>
                    <button className="text-muted hover:text-muted-foreground ml-4 text-sm font-semibold rounded-full hover:bg-zinc-600 py-2 px-4">
                      Reply
                    </button>
                      </div>
                      </div>
                  </div>
              </li>
              ))} 
            </ol>
          </div>
    </div>
  )
}

export default Comment