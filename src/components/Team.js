import React from 'react'

import Profile1 from '../resources/profile.png'

const Team = () => {
  return (
    <div className="w-full mb-16 mt-16 md:my-36">
        <div className='grid md:grid-cols-2 md:w-10/12 lg:w-9/12 mx-auto'>
            <div className='md:w-full scale-75 md:scale-75 lg:w-6/12 mx-auto bg-[#F0C548] rounded-[3rem] flex justify-center'>
                <img src={Profile1} className='grayscale w-full' alt='...'></img>
            </div>
            <div className='w-full md:w-11/12 rounded-lg flex flex-col justify-center px-12 md:px-0'>
                <h1 className="text-4xl font-black text-[#323368] text-center md:text-left">Hello, I'm Ghirah</h1>
                <p className='text-xs md:text-sm text-[#323368] text-justify md:text-left mt-8 leading-7'>A computer science education student that is a knowledge-curious, communicative, diligent, hard-worker, responsible, and quick learner person, have passionate and experienced about web developing. Familiar with front end developing, graphic design, motion graphic, and UI/UX.</p>
                <div className='w-full grid justify-items-center md:justify-items-start'>
                    <button className='text-base text-white bg-[#F0C548] rounded-lg w-[160px] p-3 transition-all hover:bg-[#323368] mt-8 hover:text-white'>Contact</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team