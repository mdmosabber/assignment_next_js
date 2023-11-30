async function getData(){
    const response = await fetch(process.env.BASE_URL+'api/AllProject');
    if(!response.ok){
        throw new Error('Something went wrong');
    }
    return response.json()
}

import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'


const AllProject = async () => {

    const data = await getData();

  return (
    <div className="py-[60px] max-w-screen-xl mx-auto">
        <SectionTitle title="All Project" subtitle="Better Agency/SEO Solution At Your Fingertips" />

        <div className="flex flex-wrap justify-between">

            {data.map((item, index)=> {
                return(
                    <div className="w-full md:w-1/2 p-4" key={index}>
                        <div className='p-[30px] shadow-xl rounded-lg'>
                            <Image src={item['image']} alt="iamge" class="w-full object-cover rounded-lg" width={400} height={400}/>
                            <h4 className="text-black text-xl font-semibold uppercase pt-[20px]">{item['title']}</h4>
                        </div>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default AllProject