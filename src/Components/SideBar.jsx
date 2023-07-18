import React from 'react';

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const categoriess = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'JSMastery', icon: <CodeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <CodeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  { name: 'Gym', icon: <FitnessCenterIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
];

function SideBar({categories, Setcategories}) {
  return (
    <>
      <div className='flex md:w-[200px] md:flex-col flex-row md:h-[95%] h-auto overflow-y-auto mt-2 pr-8 transition-all'>
        {
          categoriess.map((category, id) => (
            <>
              <button 
               onClick={()=> Setcategories(category.name)} 
               className={`${category.name === categories ? 'bg-[#3f3f3f]' : ''} flex md:mb-8 mb-4 md:py-2 md:px-4 py-1 px-2 rounded-full cursor-pointer hover:bg-[#3F3F3F] transition`} key={id}>
                <div className="icon text-white md:px-2 md:mx-0 mx-2">{category.icon}</div>
                <div className="name text-white md:px-0 px-[0.1rem]">{category.name}</div>
              </button>
            </>
          ))
        }
      </div>
    </>
  )
}

export default SideBar
