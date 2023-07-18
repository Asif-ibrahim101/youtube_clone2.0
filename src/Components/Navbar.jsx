import React from 'react';
import SearchBar from './SearchBar';
import {BsFillSunFill} from 'react-icons/bs';
import {Link} from 'react-router-dom'

const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

function Navbar() {
  return (
    <>
        <div className='py-3
         flex justify-between shadow-md items-center bg-black'>
          <Link to={'/'} className="logo cursor-pointer">
            <img style={{width: '50px'}} src={logo} alt="logo" />
          </Link>

          <div className="searchBar">
            <SearchBar/>
          </div>

          <div className="mode cursor-pointer">
            <BsFillSunFill className='text-white text-3xl'/>
          </div>
        </div>
    </>
  )
}

export default Navbar
