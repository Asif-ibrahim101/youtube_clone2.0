import React, { useState, useEffect } from 'react';
import FetchFormApi from '../Utils/FetchData';
import Vedios from './Vedios';
import SideBar from './SideBar';

function Feed() {
  const [loading, setloading] = useState(false);
  const [categories, Setcategories] = useState('New');
  const [videos, getVideos] = useState([]);

  useEffect(() => {
    setloading(true);
    FetchFormApi(`search?part=snippet&q=${categories}`).then((data) => { getVideos(data.items) });
    setloading(false);
  }, [categories]);

  if (loading) {
    return <p className='absolute z-10 md:top-[25rem] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] text-4xl text-red-600 font-bold'>Loading...</p>
  };

  return (
    <>
      <div className='flex md:flex-row flex-col md:mt-4'>
        <div className="sidebar md:h-[92vh] h-auto border-r-2 border-solid border-[#3d3d3d]">
          <SideBar categories={categories} Setcategories={Setcategories} />
        </div>

        <div className="videos md:pl-8 overflow-y-auto h-[90vh]">
          <p className='text-white md:text-2xl text-xl md:mb-2'> <span className='text-red-600'>{categories}</span> Videos</p>
          <Vedios videos={videos} />
        </div>
      </div>
    </>
  )
}

export default Feed
