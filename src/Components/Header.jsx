import React from 'react'
import logo from '../assets/site-logo.svg'

const Header = () => {
  return (
    <div className='pl-4 pt-3.5 '>
      <a href='#' className='flex flex-row justify-start items-center'><img src={logo} alt="Logo-img" className='h-9'/>
      <span className='font-bold font-roboto text-lg pl-2'>DSA Revision</span></a>
    </div>
  )
}

export default Header
