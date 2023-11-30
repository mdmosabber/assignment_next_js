import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({name}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <h3 className='text-2xl font-semibold leading-tight mb-4'> {name} </h3> 
        <p className='text-black'> 

        <Link href='/'> Home </Link>

         &gt; <span className='text-[#20B15A]'> {name} </span> </p>
    </div>
  )
}

export default Breadcrumb