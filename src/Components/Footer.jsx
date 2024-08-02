import React from 'react'
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex justify-center font-roboto text-[11px] my-8 items-center gap-1'>
      <span className='text-gray-500'>Designed with  </span>
        <FaHeart className='text-red-400'/>
        <span className='text-gray-500'>by</span>
      <span className='text-gray-600'>Hemansh Srivastava</span>
    </div>
  )
}

export default Footer
