import React from 'react'

function ChatingScreen({ c, m }) {
  return (
    <>
      <div className='h-auto w-full px-10 mb-10  text-white'>

        <div className='h-auto w-full flex'>

          <p className='bg-gray-800 px-3 py-2  rounded-md my-3'>{m}</p>

        </div>

        <div className='h-auto w-full flex justify-end'>
          <p className='bg-teal-700 px-3 py-2 rounded-md my-3'>{c}</p>
        </div>
      </div>
    </>
  )
}

export default ChatingScreen