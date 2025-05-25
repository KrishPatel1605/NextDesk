import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Linkedin, User, MoreVertical } from 'lucide-react'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <header className='py-2 md:px-4 md:py-2 flex justify-between items-center bg-gray-200 shadow-lg rounded-2xl'>
      {/* Logo and Title */}
      <div className='flex items-center gap-4'>
        <img src='/nextdesk.png' alt="NextDesk Logo" className='w-8 h-4 md:w-8 md:h-8' />
        <span className='text-xl md:text-xl font-bold text-[#1F2937]'>NextDesk</span>
      </div>

      {/* Dynamic Navigation Buttons */}
      <nav className='flex items-center gap-3 md:gap-4'>
        {path === '/' && (
          <Button
            className='bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-4 py-1 rounded-md shadow'
            onClick={() => navigate('/resume-build')}
          >
            Resume Upload
          </Button>
        )}
        {path === '/resume-build' && (
          <Button
            className='bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-4 py-2 rounded-md shadow'
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        )}
        {path === '/analysis' && (
          <>
            <Button
              className='bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-4 py-2 rounded-md shadow'
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              className='bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-4 py-2 rounded-md shadow'
              onClick={() => navigate('/resume-build')}
            >
              Resume Upload
            </Button>
          </>
        )}
      </nav>

      {/* Right Side Icons */}
      <div className='flex items-center gap-4'>
        <a
          href='https://www.linkedin.com/in/pratham-manjrekar-821b61291/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className='text-gray-700 hover:text-blue-600' size={22} />
        </a>

        <div className='w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-200'>
          <User size={18} className='text-gray-700' />
        </div>

        <MoreVertical size={22} className='cursor-pointer text-gray-700 hover:text-gray-900' />
      </div>
    </header>
  )
}

export default Header;
