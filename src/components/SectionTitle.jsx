import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div>
        <h6 className='text-green-500 text-base font-medium uppercase mb-4'> {title} </h6>
        <h3 className='text-black text-2xl font-semibold'> {subtitle}  </h3>
    </div>
  )
}

export default SectionTitle