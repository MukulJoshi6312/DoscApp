import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 relative overflow-hidden'>
        <div className='navbar absolute w-full py-6 mt-6 flex justify-center items-center'>
            <p className='text-zinc-600'>Documents.</p>
        </div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[130px] text-zinc-900 font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background
