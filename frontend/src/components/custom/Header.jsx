import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Linkedin, User, MoreVertical } from 'lucide-react'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;


  return (
    <div className='p-4 px-5 flex justify-between items-center bg-gray-200 shadow-lg rounded-lg'>
      {/* Left: Logo + Title */}
      <div className='flex items-center gap-10'>
        <img src='/nextdesk.png' width={40} height={50} alt="NextDesk Logo" />
        <p className='text-2xl font-bold'>NextDesk</p>
      </div>

      {/* Center: Dynamic Buttons */}
      <div className='flex items-center gap-4 relative z-10'>
        {path === '/' && (
          <Button
            className={`bg-blue-500 text-lg px-5 py-2 `}
            onClick={() => navigate('/resume-build')}
          >
            Resume Upload
          </Button>
        )}
        {path === '/resume-build' && (
          <Button
            className={`bg-blue-500 text-lg px-5 py-2 `}
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        )}
        {path === '/analysis' && (
          <>
            <Button
              className={`bg-blue-500 text-lg px-5 py-2 `}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              className={`bg-blue-500 text-lg px-5 py-2 }`}
              onClick={() => navigate('/resume-build')}
            >
              Resume Upload
            </Button>
          </>
        )}
      </div>

      <div className='flex items-center gap-10'>
        {/* LinkedIn Icon with Link */}
        <a
          href='https://www.linkedin.com/in/krish-patel-a3a036297/' // 🔁 Replace with your actual LinkedIn URL
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 cursor-pointer'
        >
          <Linkedin className='text-black hover:text-blue-600 transition duration-200' size={30} />
        </a>

        {/* Circular User Icon */}
        <div className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center cursor-pointer hover:bg-gray-300 transition duration-200'>
          <User size={22} className='text-black' />
        </div>

        {/* More Icon */}
        <MoreVertical className='cursor-pointer hover:text-gray-600 transition duration-200' size={28} />
      </div>

    </div>
  )
}

export default Header;
