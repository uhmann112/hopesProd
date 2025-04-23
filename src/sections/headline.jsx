import React from 'react'
import { useMediaQuery } from 'usehooks-ts'


import { titleWords } from '../data/typewriterDataSets';
import WriteEffect from '../modules/Typewriter';
import Kugel from '../modules/Kugel';
import { div } from 'three/tsl';

const Headline = () => {
    const isMd = useMediaQuery('(min-width: 768px)')
  return (
    <div className='h-screen'>
        <div className='grid   md:mb-16 '>
            <div className='my-6 text-center md:text-left md:m-16 '>
                <h1 className='my-16 text-6xl font-extrabold  md:text-9xl md:text-left md:my-12
                    text-purple-500'>HOPES</h1>
                <h2 className='text-3xl md:text-6xl md:text-left
                    text-purple-50'>Welcome! <br />
                This is a space to share your <span className='text-purple-500'> <WriteEffect dataset={titleWords} /></span></h2>

                <button className='my-16 w-30 h-10 bg-purple-500 text-center text-purple-50 text-2xl rounded-lg   md:w-60 md:h-20 md:text-4xl md:rounded-2xl md:my-16 hover:bg-purple-50 hover:text-purple-500 transition-all duration-300 ease-in-out'>
                    explore</button>
            </div>
            <div>
            </div>
            <div className=' md:absolute md:right-0 md:-z-10 md:w-4/5 md:h-full'>
                {isMd ? <Kugel /> : ''}
            </div>
        </div>
    </div>

  )
}

export default Headline