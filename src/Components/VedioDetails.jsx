import React, { useState, useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import FetchFormApi from '../Utils/FetchData';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Vedios from './Vedios';

function VedioDetails() {
  const { id } = useParams();

  const [segestedVedios, getsegestedVedios] = useState([]);
  const [videoDetail, setVideodetail] = useState(null);

  useEffect(() => {
    FetchFormApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideodetail(data.items[0]));

    FetchFormApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => getsegestedVedios(data.items));
  }, [id]);

  return (
    <>
      <div className='min-h-[95vh]'>
        <div className="flex md:row flex-col">
          <div className="flex-1">
            <div className='w-[100%] sticky top-[86px]'>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className='react-player' controls />
              <div className="title flex py-2">
                <p className="md:text-md md:px-2 text-md text-white">{videoDetail?.snippet?.title}</p>
              </div>

              <div className="flex justify-between md:px-2 py-4">
                <div className='flex items-center'>
                  <div className='text-xl font-bold text-white pr-2'>{videoDetail?.snippet?.channelTitle}</div>
                  <AiFillCheckCircle className='text-white' />
                </div>

                <div className='flex'>
                  <div className='md:text-xl text-md font-bold text-white px-2'>{videoDetail?.statistics?.viewCount} Views</div>
                  <div className='md:text-xl text-md font-bold text-white px-2'>{videoDetail?.statistics?.likeCount} Likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pl-32">
          <Vedios videos={segestedVedios} />
        </div>
      </div>
    </>
  )
}

export default VedioDetails;
