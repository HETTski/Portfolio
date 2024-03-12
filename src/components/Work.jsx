import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#EFECEC] bg-[#0C2D57]'>
        <div className='max-v-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#EFECEC] border-[#FC6736]'>Work</p>
                <p className='py-6'> Check out some of my recent work</p>
            </div>

            <div className='grid sm:drid-cols-2 md:grid-cols-3 gap-4'>
              <div className='shadow-lg shadow-[#040c16] group container rounded-md justrify-center items-center mx-auto content-div'>
                {/*hover*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application
                  </span>
                  <div className='pt-8 text-center'>
                    {/* <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7000 font-bold text-lg'>Demo</button>
                    </a> */}
                    <a href="/https://github.com/HETTski/Computer-Configuration">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7000 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Work