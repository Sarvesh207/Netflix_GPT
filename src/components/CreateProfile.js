import React from 'react'
import { KIDSPROFILE } from '../utils/constant'
const Download = () => {
  return (
    <div>
    <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5 ">
        <div className="left order-last lg:order-first md:order-first">
            <div className="">
                <img src={KIDSPROFILE} alt="Image" className='lg:w-[35em] md:w-[35em] w-[25em]' />
            </div>
        </div>
        <div className="right mb-10 lg:mb-0 md:mb-0 ">
            <div className="">
                <h2 className='text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start'>Create profiles for kids</h2>
                <p className='text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start'>Send children on adventures with their favourite <br className='hidden lg:block'/> characters in a space made just for them—free 
                <br className='hidden lg:block'/>with your membership.</p>
            </div>
        </div>
    </div>
    <div className='hr_Line' />
</div>
  )
}

export default Download