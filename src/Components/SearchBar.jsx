import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const OnHandleClick = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <>
      <div>
        <form className='bg-[#121212] border-solid border-gray-700 border-2 rounded-full flex md:w-[500px]' 
        onSubmit={OnHandleClick}
        >
          <input
            className='outline-none text-white w-full py-2 bg-[#121212] border-solid border-[#121212] border-2 pl-4 rounded-s-full'
            type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder='Search' />
          <button className='bg-[#222222] rounded-e-full'>
            <AiOutlineSearch className='md:text-2xl md:mx-4 text-gray-300' />
          </button>
        </form>
      </div>
    </>
  )
}

export default SearchBar;
