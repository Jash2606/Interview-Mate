import React from 'react'
import { ModeToggle } from './ModdleToggle'

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
        <ModeToggle />
        <h1> Navbar </h1>
    </div>
  )
}

export default Navbar