import React from 'react'
import { BG_URL } from '../utils/constant'
import { HeroSection, Watch, Download, CreateProfile } from '../components/index'
import Enjoy from '../components/Enjoy'

const LandingPage = () => {
  return (
   <div >
   
    <HeroSection/>
    <Enjoy/>
    <Download/>
    <Watch/>
    <CreateProfile/>
   </div>
  )
}

export default LandingPage