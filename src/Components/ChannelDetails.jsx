import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import FetchFormApi from '../Utils/FetchData';
import { AiFillCheckCircle } from 'react-icons/ai';
import Vedios from './Vedios';

function ChannelDetails() {
  const { id } = useParams();

  const [channelVideos, getChannelVedios] = useState([]);
  const [ChannelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    FetchFormApi(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => setChannelDetails(data.items[0]));

    FetchFormApi(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`).then((data) => getChannelVedios(data.items));
  }, [id]);

  return (
    <>
      <div className="">
        <div id='banner' className="relative w-full md:h-[350px] h-[250px]">
          <div className="absolute md:top-[15rem] top-[12rem] left-[7.5rem] md:left-[52rem] align-middle items-center flex justify-center flex-col">
            <img className='rounded-full md:w-[200px] w-[120px] h-[120px] md:h-[200px]' src={ChannelDetails?.snippet?.thumbnails?.high?.url} alt="logo" />
            <div className="flex items-center justify-center align-middle mt-4">
              <p className="font-semibold text-center text-white text-xl">{ChannelDetails?.snippet?.title}</p>
              <AiFillCheckCircle className='text-white mx-2'/>
            </div>

            <div className="md:text-center my-1">
              <p className="text-lg text-gray-400">{parseInt(ChannelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>
            </div>
          </div>
        </div>

        <div className="md:mt-[12rem] md:mx-[8rem] mx-2 mt-[10rem]">
          <Vedios videos={channelVideos} />
        </div>
      </div>
    </>
  )
}

export default ChannelDetails
