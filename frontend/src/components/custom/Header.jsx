import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='p-3 px-5 flex justify-between shadow-lg'>
      <img src='/logo.svg' width={150} height={130} />
      <Button className='bg-purple-600 text-lg'>Get Started</Button>
    </div>
  )
}

export default Header
