import React from 'react'
import { LOGO } from '../utils/constant'

const Navbar = () => {
  return (
    <div className=''>

        <div className='main flex justify-between items-center py-5 px-5 lg:justify-around md:justify-around lg:mb-28 md:mb-10'>
            <div className='left'>
                <div className='netflix'>
                    <img src={LOGO} alt="NetflixLogo" className='lg:w-44 md:w-28  ' />
                </div>
            </div>
            {/* right */}
            <div className=''>
                <div className='main flex items-center'>
                    <div className="selector  bg-[#111112] text-white mx-4 px-5 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-75">
                        <select name="" id="" className='bg-transparent outline-none opacity-70'>

                            <option value="English" className='bg-[#111112] text-white'>English</option>
                            <option value="हिंदी" className='bg-[#111112] text-white '>हिंदी</option>

                        </select>
                        
                    </div>
                    <button className="bg-[#e50815] text-white px-5 py-1 rounded-md font-bold hover:bg-[#d80c1a]" type='button'>SignIn</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar