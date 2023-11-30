async function getData(){
  const response = await fetch(process.env.BASE_URL+'api/HeroList');
  if(!response.ok){
    throw new Error('Someting went wrong !')
  }

  return response.json();
}

import Image from 'next/image';
import Link from 'next/link'

const HeroSection = async() => {

  const data = await getData();

  return (
    <div className="py-[60px]">

      <div className='max-w-screen-xl mx-auto'>
          <div className='md:flex items-center justify-between md:space-x-3'>

            <div className='w-full md:w-1/2'> 
                  <h2 className='text-black text-5xl font-bold leading-13 mb-5'> {data.title} </h2>
                  <p className='text-black font-medium text-base mb-12'> {data.description} </p>
                  <Link href="" className='capitalize py-[15px] px-[30px] table text-white rounded-lg bg-[#20B15A] transition hover:bg-[#20b15ac9]'>Get Started</Link>
            </div>

            <div className='w-full md:w-1/2'> 
                <div className='md:flex'>                  
                    <Image className='w-full p-2 md:w-1/2 lg:w-2/3 object-cover rounded-3xl' src={data.image2} alt='image' width={400} height={200}/>
                    <Image className='w-full p-2 md:w-1/2 lg:w-1/3 object-cover rounded-3xl' src={data.image1} alt='image' width={200} height={200}/>
                </div>

                <div className='md:flex'>
                  <Image className='w-full p-2 md:w-1/2 lg:w-1/3 object-cover rounded-3xl' src={data.image4} alt='image' width={200} height={200}/>              
                  <Image className='w-full p-2 md:w-1/2 lg:w-2/3 object-cover rounded-3xl' src={data.image3} alt='image' width={400} height={200}/>
                </div>                 
            </div>

          </div>
      </div>
    </div>

  )
}

export default HeroSection