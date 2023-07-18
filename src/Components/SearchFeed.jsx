import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import FetchFormApi from '../Utils/FetchData';
import Vedios from './Vedios';

function SearchFeed() {
  const {searchTerm} = useParams();
  const [searchResult, setSearchresult] = useState([]);

  useEffect(() => {
    FetchFormApi(`search?part=snippet&q=${searchTerm}`).then((data) => setSearchresult(data.items));
  },[searchTerm]);

  return (
    <>
      <div className="main flex flex-col justify-center my-12 md:ml-24">
        <div className="md:pb-3 mb-4">
          <p className='md:text-3xl text-xl text-bold text-white'>Search Results for <span className='text-red-600 font-bold'>{searchTerm}</span> videos</p>
        </div>

        <div className="">
          <Vedios videos={searchResult} />
        </div>
      </div>
    </>
  )
}

export default SearchFeed
