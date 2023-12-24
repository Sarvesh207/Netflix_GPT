import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
const Faq = ({title, desc}) => {
    const[open, setOpen] = useState(false)
  return (
    <div>
        <div className="faq_main container mx-auto lg:max-w-6xl md:max-w-6xl  px-5 text-white ">
            <div className='mb-2'>
                <div className='main_top bg-[#2d2d2d] hover:bg-[#414141] flex justify-between px-5 items-center cursor-pointer' onClick={() => setOpen(!open)}>
                    {/* left */}
                    <div className='left '>
                    <h1 className='lg:text-2xl md:text-2xl xl'>{title}</h1>

                    </div>

                    {/* right */}
                    <div className='rigth'>
                       { open ?
                         <button className='lg:text-4xl md:text-4xl text-2xl'><AiOutlineMinus/></button> :
                         <button className='lg:text-4xl md:text-4xl text-2xl' ><AiOutlinePlus/></button>
                       } 
                       
                    </div>
                    
                </div>
               {
                open && (
                    <div className='main_bottom bg-[#2d2d2d] px-5 py-4 text-2xl lg:text-start md:text-start text-justify'>
                    <p>{desc}</p>
                </div>
                )
               }

            </div>
        </div>
        
    </div>
  )
}

export default Faq