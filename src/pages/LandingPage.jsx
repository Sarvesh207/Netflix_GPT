import React from 'react'
import { BG_URL } from '../utils/constant'
import { HeroSection, Watch, Download, CreateProfile } from '../components/index'
import Enjoy from '../components/Enjoy'
import Faq from '../components/Faq'
import  {faqData}  from '../Data/faqData'

const LandingPage = () => {

  console.log(faqData)
  return (
   <div >
   
    <HeroSection/>
    <Enjoy/>
    <Download/>
    <Watch/>
    <CreateProfile/>
    <div>
      <h2 className='text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold py-10'>Frequently Asked <br className='lg:hidden md:hidden'/> Questions</h2>
      <div>
        {
          faqData.map((item, index) => {
            const { title, desc} = item
           return  <Faq key ={index} title={title} desc={desc}/>
          })
        }
       
      </div>
      
    </div>
   </div>
  )
}

export default LandingPage