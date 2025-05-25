import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Linkedin, User, MoreVertical } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [showPopup, setShowPopup] = useState(false);

  const developers = [
    {
      name: 'Krish Patel',
      college: 'VasantDada College of Engineering, Sion',
      role: 'Backend Developer, NextDesk',
      image: '/Backend.png',
      linkedin: 'https://www.linkedin.com/in/krish-patel-a3a036297/',
    },
    {
      name: 'Pratham Manjrekar',
      college: 'Thadomal Shahani College of Engineering',
      role: 'Frontend Developer, NextDesk',
      image: '/Backend.png',
      linkedin: 'https://www.linkedin.com/in/pratham-manjrekar-821b61291',
    },
  ];

  return (
    <>
      <header className='py-2 md:px-4 md:py-2 flex justify-between items-center bg-gray-200 shadow-lg rounded-2xl'>
        {/* Logo and Title */}
        <div className='flex items-center gap-4'>
          <img src='/nextdesk.png' alt='NextDesk Logo' className='w-8 h-4 md:w-8 md:h-8' />
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
          <button onClick={() => setShowPopup(true)}>
            <Linkedin className='text-gray-700 hover:text-blue-600' size={22} />
          </button>

          <div className='w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-200'>
            <User size={18} className='text-gray-700' />
          </div>

          <MoreVertical size={22} className='cursor-pointer text-gray-700 hover:text-gray-900' />
        </div>
      </header>

      {/* Modal */}
      {showPopup && (
        <div className='fixed inset-0 bg-white/55 bg-opacity-10 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl shadow-2xl p-6 w-[95%] max-w-4xl relative'>
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className='absolute top-2 right-4 text-gray-600 text-xl hover:text-black'
            >
              &times;
            </button>

            <h2 className='text-xl font-bold text-center mb-6'>Meet the Developers</h2>

            <div className='flex flex-col md:flex-row items-center justify-around gap-6'>
              {developers.map((dev, idx) => (
                <div
                  key={idx}
                  className='flex flex-col items-center text-center border p-4 rounded-lg shadow-md w-64'
                >
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className='w-20 h-20 rounded-full border-2 border-gray-300 mb-3'
                  />
                  <p className='font-semibold text-lg'>{dev.name}</p>
                  <p className='text-sm text-gray-600'>{dev.college}</p>
                  <p className='text-sm text-gray-500 mb-2'>{dev.role}</p>
                  <a
                    href={dev.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition'
                  >
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
