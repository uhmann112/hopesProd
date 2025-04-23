import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import WriteEffect from '../modules/Typewriter'
import { titleWords } from '../data/typewriterDataSets'
import { addData } from '../data/dataBase.js/dataBase'

const Input = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [state, setState] = useState(0)

  const sectionRef0 = useRef()
  const sectionRef1 = useRef()
  const sectionRef2 = useRef()
  const rightPreviewRef = useRef()

  useEffect(() => {
    const refs = [sectionRef0, sectionRef1, sectionRef2]
    const currentRef = refs[state]

    if (currentRef?.current) {
      gsap.fromTo(
        currentRef.current,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      )
    }

   
  }, [state])

  function sendData() {
    addData(title, content)
  }

  return (
    <div className='w-screen h-screen flex flex-col md:flex-row'>
      {/* Left Input Side */}
      <div className='w-full h-full'>
        {state === 0 && (
          <div ref={sectionRef0} className='flex flex-col items-center justify-center h-full md:justify-start md:mt-12'>
            <h1 className='text-3xl font-bold text-purple-50 md:text-6xl'>
              name your <span className='text-purple-500'><WriteEffect dataset={titleWords} /></span>
            </h1>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='your title'
              className='bg-purple-50 my-6 rounded-md h-9 text-center md:h-12 md:w-72 md:my-24'
            />
            <button
              onClick={() => setState(1)}
              className='w-30 h-10 bg-purple-500 text-purple-50 rounded-lg hover:bg-purple-50 hover:text-purple-500 transition-all duration-300 ease-in-out md:w-60 md:h-20 md:text-4xl md:rounded-2xl md:my-16'
            >
              Weiter
            </button>
          </div>
        )}

        {state === 1 && (
          <div ref={sectionRef1} className='flex flex-col items-center justify-center h-full md:justify-start md:mt-12'>
            <h1 className='text-3xl font-bold text-purple-50 md:text-6xl'>
              share your <span className='text-purple-500'><WriteEffect dataset={titleWords} /></span>
            </h1>
            <input
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder='your message'
              className='bg-purple-50 my-6 rounded-md h-16  md:h-12 md:w-72 md:my-24'
            />
            <button
              onClick={() => setState(2)}
              className='w-30 h-10 bg-purple-500 text-purple-50 rounded-lg hover:bg-purple-50 hover:text-purple-500 transition-all duration-300 ease-in-out md:w-60 md:h-20 md:text-4xl md:rounded-2xl md:my-16'
            >
              Weiter
            </button>
          </div>
        )}

        {state === 2 && (
          <div ref={sectionRef2} className='flex flex-col items-center justify-center h-full md:mt-12'>
            <h1 className='text-3xl font-bold text-purple-50 md:text-6xl'>
              let your <span className='text-purple-500'><WriteEffect dataset={titleWords} /></span> fly free!
            </h1>

            <h2 className='text-xl text-purple-50 text-center my-3.5'>if you are ready to let go, share your thoughts <br /> and let them become part of this project... <br /> <span className='text-purple-500' >click he button</span></h2>
            <button
              onClick={() => {
                sendData();
                setState(0);
                setTitle('');
                setContent('');
              }}
              className='w-30 h-10 my-6 bg-purple-500 text-purple-50 rounded-lg hover:bg-purple-50 hover:text-purple-500 transition-all duration-300 ease-in-out md:w-60 md:h-20 md:text-4xl md:rounded-2xl md:my-16'
            >
              I'm ready
            </button>
          </div>
        )}
      </div>

    </div>
  )
}

export default Input
