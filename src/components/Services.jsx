async function getData(){
    const response = await fetch(process.env.BASE_URL+'api/AllService');
    if(!response.ok){
        throw new Error('Something went wrong');
    }
    return response.json();
}


import SectionTitle from './SectionTitle'
import Image from 'next/image'

const Services = async() => {
  const data = await getData();

  return (
    <div className='py-[60px] max-w-screen-xl mx-auto'>
        <SectionTitle title="Our All Services" subtitle="We Provide BestWeb design services"/>
    
        <div className="flex flex-wrap justify-between mt-[50px]">

            {data.map((item, index)=> {
                return(
                <div className="w-full md:w-1/2 p-4" key={index}>
                    <div className='p-[30px] shadow-xl rounded-lg'>
                    
                        <h4 className='text-black text-2xl font-semibold uppercase mb-5'> {item['title']} </h4>
                        <p className='text-gray-400 text-base font-normal capitalize mb-8'> {item['des']}  </p>
                        <div className="flex"> 
                            <Image src={item['image1']} alt="img" className="w-full md:w-2/3 object-cover rounded-lg m-3" width={300} height={100}/>
                            <Image src={item['image2']} alt="img" className="w-full md:w-1/3 object-cover rounded-lg m-3" width={150} height={100}/>
                        </div>

                        <div className="flex"> 
                            <Image src={item['image3']} alt="img" className="w-full md:w-1/2 object-cover rounded-lg m-3" width={300} height={100}/>
                            <Image src={item['image4']} alt="img" className="w-full md:w-1/2 object-cover rounded-lg m-3" width={300} height={100}/>
                        </div>

                    </div>                       
                </div>
                )
            })}

        </div>

    </div>
  )
}

export default Services