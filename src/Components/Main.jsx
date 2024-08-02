import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'

const Main = () => {
  return (
    <div className='flex flex-col gap-16 lg:px-24 py-4'>
    <div><Section1/></div>
    <div><Section2/></div>
    <div><Section3/></div>
    </div>
  )
}

export default Main
