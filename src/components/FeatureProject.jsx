async function getData(){
    const response = await fetch(process.env.BASE_URL+'api/FeaturedProject');

    if(!response.ok){
      throw new Error('Something went wrong')
    }
    const jsonData = await response.json();
    const data = jsonData.slice(0, 1);
    return data;
}

async function smallData(){
    const response = await fetch(process.env.BASE_URL+'api/FeaturedProject');

    if(!response.ok){
      throw new Error('Something went wrong')
    }
    const jsonData = await response.json();
    const data = jsonData.slice(1, 5);
    return data;
}



import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

const FeatureProject = async() => {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };

    const data = await getData();
    const smalldata = await smallData();

  return (
    <div className="py-[60px] bg-[#F0FDF4]">
      <div className='max-w-screen-xl mx-auto'>

      <SectionTitle title='Featured Project' subtitle='We provide the Perfect Solution to your business growth'/>
 
        {/* { JSON.stringify(smalldata)}  */}

        <div className='md:flex justify-between items-center md:space-x-4 space-x-0 mt-7'>
            <div className='w-full md:w-1/2'>

                { data.map((item, index)=> {
                    return(
                        <div key={index} className='lg:p-0 p-3'>           
                            <Image src={item['image']} alt="image" className='rounded-lg object-cover w-full' width={600} height={400} />
                            <p className='text-[#2E3E5C] capitalize text-sm font-normal leading-6 my-4'> {item['remark']} - {formatDate(item['created_at'])} </p>
                            <h4 className='text-[#1E1F4B] text-2xl font-bold leading-7'> {item['title']} </h4>
                        </div>                        
                    )
                })}
          
            </div>

            <div className='w-full md:w-1/2'>
                <div className='md:flex flex-wrap justify-between'>

                    {smalldata.map((item,index) => {
                        return(
                            <div key={index} className='w-full md:w-1/2 p-3'>
                                <Image src={item['image']} alt="image" className='rounded-lg object-cover w-full' width={250} height={150} />
                                <p className='text-[#2E3E5C] capitalize text-sm font-normal leading-6 my-4'> {item['remark']} - {formatDate(item['created_at'])} </p>
                                <h4 className='text-[#1E1F4B] text-2xl font-bold leading-7'> {item['title']}  </h4>
                            </div>
                        )
                    })}

          
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default FeatureProject