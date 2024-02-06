import React from 'react'

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/javascript.png"
import REACT from "../assets/react.png"
import MONGO from "../assets/mongo.png"
import NODE from "../assets/node.png"
import TAILWIND from "../assets/tailwind.png"
import CPP from "../assets/cpp.png"



const Skills = () => {
  return (
    <div name='Skills' className='w-full h-screen bg-[#0C2D57] text-[#EFECEC]'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FC6736] '>Experience</p>
                <p className='py-4'>Here are technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={CSS} alt="HTML icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={JS} alt="HTML icon"/>
                    <p className='my-4'>Java Script</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={REACT} alt="HTML icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={MONGO} alt="HTML icon"/>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={NODE} alt="HTML icon"/>
                    <p className='my-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={TAILWIND} alt="HTML icon"/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className="w-20 mx-auto" src={CPP} alt="HTML icon"/>
                    <p className='my-4'>C++</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills