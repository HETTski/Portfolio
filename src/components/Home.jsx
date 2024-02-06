import React from 'react'
import {HiArrowNarrowDown, HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0C2D57]'>
    {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
            <p className='text-[#FC6736]'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#FFB0B0]'>Hubert Tański</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#EFECEC]'>Full Stack Developer</h2>
            <p className='text-[#EFECEC]'>I'm a full-stack developer and cybersecurity student. Currently focused on classes and building full-stack web applications.</p>
            <div>
                <button>View Work <HiOutlineArrowNarrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Home