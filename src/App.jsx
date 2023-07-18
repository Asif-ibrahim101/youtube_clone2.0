import React from 'react';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import ChannelDetails from './Components/ChannelDetails';
import VedioDetails from './Components/VedioDetails'
import SearchFeed from './Components/SearchFeed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative main px-4 bg-[#000]">
          <Navbar />
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/video/:id' element={<VedioDetails/>}/>
            <Route path='/channel/:id' element={<ChannelDetails/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
