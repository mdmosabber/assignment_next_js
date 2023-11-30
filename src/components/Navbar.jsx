'use client'
import { useState, useEffect } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {  
  const current = usePathname();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto'>
        <nav className='md:flex items-center justify-between relative' id='navbar'>
            <div>
              <Link href='/' className='text-black font-poppins text-xl font-bold'>  
                Design <span className='text-[#F55F1D]'>AGENCY</span> 
              </Link>
            </div>

            <button  onClick={() => setOpenNav(!openNav)} className="absolute top-[25px] right-0 md:hidden">
              {openNav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (     
                             
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                  </svg>                
                )
              }
            </button>

         
            <ul className={`md:flex items-center md:space-x-2 py-[30px] ${ openNav ? "flex flex-col " : "hidden" }`}>
                <li className={current === '/' ? 'active': ''}> 
                  <Link href={'/'} className='capitalize py-[8px] px-[15px] inline-block text-black hover:rounded hover:border-[#20B15A] hover:bg-[#20B15A] hover:text-white'> Home </Link> 
                </li>
                <li className={current === '/team' ? 'active': ''}> 
                  <Link href={'/team'} className='capitalize py-[8px] px-[15px] inline-block text-black hover:rounded hover:border-[#20B15A] hover:bg-[#20B15A] hover:text-white'> Team </Link> 
                </li>
                <li className={current === '/services' ? 'active': ''}>
                  <Link href={'/services'} className='capitalize py-[8px] px-[15px] inline-block text-black hover:rounded hover:border-[#20B15A] hover:bg-[#20B15A] hover:text-white'> Service </Link> 
                </li>
                <li className={current === '/projects' ? 'active': ''}>
                  <Link href={'/projects'} className='capitalize py-[8px] px-[15px] inline-block text-black hover:rounded hover:border-[#20B15A] hover:bg-[#20B15A] hover:text-white'> Projects  </Link> 
                </li>

                <li className={current === '/testimonials' ? 'active': ''}>
                  <Link href={'/testimonials'} className='capitalize py-[8px] px-[15px] inline-block text-black hover:rounded hover:border-[#20B15A] hover:bg-[#20B15A] hover:text-white'> Testimonials  </Link> 
                </li>
                <li> <Link href="" className='capitalize py-[8px] px-[15px] inline-block text-black rounded border border-[#20B15A]'> Login </Link> </li>
                <li> <Link href="" className='capitalize py-[8px] px-[15px] inline-block text-white rounded border border-[#20B15A] bg-[#20B15A]'> Register </Link> </li>
                
            </ul>

    

        </nav>
    </div>
  )
}

export default Navbar