import React from 'react'
import {HiArrowNarrowDown, HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0C2D57]'>
    {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FC6736]'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#FFB0B0]'>Hubert Tański</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#EFECEC]'>Full Stack Web Developer</h2>
            <p className='text-[#EFECEC]'>I'm a full stack web developer and cybersecurity student. Currently focused on classes and building full stack web applications.</p>
            <div>
                <button className='text-[#FC6736] border-[#FC6736] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FC6736] hover:text-[#0C2D57] hover:border-[#FFB0B0]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiOutlineArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home