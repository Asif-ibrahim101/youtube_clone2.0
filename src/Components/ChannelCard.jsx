import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';


function ChannelCard({ getChannel }) {

  return (
    <>
      <div className='card md:w-[370px] w-full flex justify-center flex-col align-middle items-center'>
        <Link to={getChannel?.id?.channelId ? `/channel/${getChannel?.id?.channelId}` : demoUrl}>
          <img
            className='rounded-full'
            src={getChannel?.snippet?.thumbnails?.medium?.url} alt="image" />
        </Link>

        <div className="py-4 flex items-center">
          <Link to={getChannel?.id?.channelId ? `/channel/${getChannel?.id?.channelId}` : demoUrl}>
            <p className='text-white text-2xl pr-2'>{getChannel?.snippet?.channelTitle}</p>
          </Link>
          <AiFillCheckCircle className='text-white'/>
        </div>
      </div>
    </>
  )
}

export default ChannelCard
