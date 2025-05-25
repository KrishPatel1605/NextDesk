import React from 'react'
import AddResume from './components/AddResume'

const Dashboard = () => {
  return (
    <div className='p-12 md:px-20 lg:px-32 space-y-3'>
      <h2 className='font-semibold text-2xl'>Resumes
      </h2>
      <p className='font-normal text-gray-800'>
        Grab Suitable Job Roles For You Based on Ai-Powered Resumes
      </p>
      
      <div>
          <AddResume />
      </div>
    </div>
  )
}

export default Dashboard
