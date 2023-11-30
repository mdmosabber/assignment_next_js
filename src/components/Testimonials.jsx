async function getData(){
    const response = await fetch(process.env.BASE_URL+'api/TestimonialList');
    if(!response.ok){
        throw new Error('Something went wrong');
    }
    return response.json()
}


import SectionTitle from './SectionTitle';
import Image from 'next/image'

const Testimonials = async() => {

 const data = await getData();

  return (
    <div className="max-w-screen-xl mx-auto py-[60px]">
        <SectionTitle title="Testimonial List" subtitle="Better Agency/SEO Solution At Your Fingertips" />


        <div className="flex flex-wrap justify-between">

            {data.map((item, index)=> {
                return(
                    <div className="w-full lg:w-1/3 md:w-1/2 p-4 text-center" key={index}>
                        <div className='p-[30px] shadow-xl rounded-lg'>
                            <Image src={item['image']} alt="iamge" class="mx-auto rounded-lg" width={100} height={100}/>
                            <p className='text-gray-500 text-center text-base font-normal leading-6 capitalize py-5'> {item['msg']} </p>
                            <h4 className="text-black text-xl font-semibold uppercase py-4">{item['name']}</h4>
                            <p> {item['designation']} </p>
                        </div>
                    </div>
                )
            })}

            </div>

    </div>
  )
}

export default Testimonials