import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] w-screen aspect-video  px-24 absolute text-white bg-gradient-to-r from-black'>
      
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-lg py-6 w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-white text-black font-bold p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80'>Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle