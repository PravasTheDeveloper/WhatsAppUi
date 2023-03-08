import React from 'react'
import ChatingScreen from './ChatingScreen'

function RightSideChat({ nameChat }) {

  return (
    <>
      {
        nameChat < 1 ?
          <div className='w-full h-full flex justify-center items-center ccl flex-col'>
            <img src="/new.png" alt="" />
            <h1 className='text-slate-400 text-3xl font-light my-5'>Whats App Clone</h1>
            <p className='text-slate-400 text-base font-light my-5'>
              Here i make the whats app pc and mobile view.<br/>
              If you open in mobile you can see mobile view
            </p>
          </div>
          : 
          <div className='h-full w-full'>
            <div className='w-full ChatingSreenWrapper h-full border-l border-slate-700 overflow-y-scroll'>
            <div className='w-full ChatingSreen flex flex-col justify-end py-12'>
            {
              nameChat.map((data,inx) =>{
                return <ChatingScreen c={data.crush} m={data.me} />
              })
            }
            </div>
            </div>
          </div>
      }
    </>
  )
}

export default RightSideChat