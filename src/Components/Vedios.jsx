import React from 'react';
import Videocard from './VideoCard';
import ChannelCard from './ChannelCard';

function Vedios({ videos }) {
  return (
    <>
     <div className='flex md:flex-row md:pr-0 pr-4 justify-start flex-wrap gap-8 items-center align-start'>
      {
        videos.map((item, index) => (
          <>
            <div key={index}>
              {item.id.videoId && <Videocard getvideos={item}/>}
              {item.id.channelId && <ChannelCard getChannel={item}/>}
            </div>
          </>
        ))
      }
     </div>
    </>
  )
}

export default Vedios
