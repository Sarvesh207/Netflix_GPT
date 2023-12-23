import React from 'react'
import { BG_URL } from '../utils/constant'
import { HeroSection, Navbar } from '../components'

const LandingPage = () => {
  return (
   <div className='lg:h-[44.5em] md:h-[34em]' style={{background: `linear-gradient(80deg,black,transparent), url(${BG_URL})`}}>
    <Navbar/>
    <HeroSection/>
   </div>
  )
}

export default LandingPage