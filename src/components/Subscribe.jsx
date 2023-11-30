import React from 'react'

const Subscribe = () => {
  return (
    <div className='max-w-3xl mx-auto py-[60px] text-center'>
        <h4 className='text-green-500 text-lg font-medium uppercase mb-5'> SUBSCRIBE </h4>
        <h2 className='text-black text-3xl font-semibold capitalize mb-3'> Subscribe to get the latest news about us </h2>
        <p className='text-gray-500 text-base font-medium capitalize mb-10'> Please drop your email below to get daily update about what we do </p>

        <form >
            <div className='border-solid border borde-black rounded-lg flex items-center justify-between p-2'>
                <input type="text" placeholder='Enter Your Email Address' className='w-full p-4'/>
                <button type="submit" className='text-white bg-[#F55F1D] py-4 px-5 rounded-lg'>Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Subscribe