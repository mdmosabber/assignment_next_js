import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-[60px] bg-black'>
        <div className='max-w-screen-xl mx-auto'>
            <div className='md:flex mb-8 justify-between'>
                <div className='md:w-2/5 w-full md:mr-10'>
                    <h2 className='text-white text-4xl font-bold mb-5'> WEB LOGO </h2>
                    <p className='text-white text-base font-normal mb-4'>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                    
                    <div className='flex space-x-2'>  
                        <Link href="" className='w-8 h-8 rounded-full bg-[#20B15A] text-white flex items-center justify-center'> 
                            f
                        </Link> 
                        <Link href="" className='w-8 h-8 rounded-full bg-[#20B15A] text-white flex items-center justify-center'>
                           f 
                        </Link> 
                        <Link href="" className='w-8 h-8 rounded-full bg-[#20B15A] text-white flex items-center justify-center'>
                          f  
                        </Link> 
                        <Link href="" className='w-8 h-8 rounded-full bg-[#20B15A] text-white flex items-center justify-center'>
                          f  
                        </Link> 
                 
                    </div>
                </div>
                <div className='md:w-1/5 w-full'>
                    <h5 className='text-white text-base font-semibold mb-7'>Quick Links</h5>
                    <ul> 
                        <li> <Link href="" className='text-white text-base font-medium py-1 block'> Services </Link></li>
                        <li> <Link href="" className='text-white text-base font-medium py-1 block'> Portfolio </Link></li>
                        <li> <Link href="" className='text-white text-base font-medium py-1 block'> About Us  </Link></li>
                        <li> <Link href="" className='text-white text-base font-medium py-1 block'> Contact Us </Link></li>
                    </ul>

                </div>
                <div className='md:w-2/5 w-full'>
                    <h5 className='text-white text-base font-semibold mb-7'>Address</h5>
                    <p className='text-white text-base font-medium'>
                        Design Agency Head Office. <br/>
                        Airport Road <br/>
                        United Arab Emirate
                    </p>
                </div>
            </div>
            <div>
                <p className='text-white'> Copyright Design Agency 2022 </p>
            </div>
        </div>
    </div>
  )
}

export default Footer