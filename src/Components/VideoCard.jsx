import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';

function VideoCard({ getvideos: { id: { videoId,  }, snippet } }) {
  const demoUrl = 'https://www.youtube.com/watch?v=ScDIUahWY8s';

  return (
    <>
      <div className='card md:w-[370px] w-full rounded-lg'>
        <Link to={videoId ? `/video/${videoId}` : demoUrl}>
          <img
            className='rounded-lg'
            src={snippet?.thumbnails?.high?.url} alt="image" />
        </Link>

        <div className="">
          <Link to={videoId ? `/video/${videoId}` : demoUrl}>
            <p className='text-white'>{snippet?.title.slice(0, 60)}</p>
          </Link>
        </div>

        <div className='flex items-center my-2'>
          <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoUrl}>
            <p className='text-white pr-2 font-bold'>{snippet?.channelTitle}</p>
          </Link>
          <p className='text-white'>
            <AiFillCheckCircle />
          </p>
        </div>

      </div>
    </>
  )
}

export default VideoCard;
