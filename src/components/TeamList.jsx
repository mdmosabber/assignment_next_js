async function getData(){
    const response = await fetch(process.env.BASE_URL+'api/TeamList');
    return response.json()
}

import SectionTitle from "@/components/SectionTitle"
import Image from "next/image";
import fIcon from "./../../public/images/facebook.svg";
import tIcon from "./../../public/images/instagram.svg";
import iIcon from "./../../public/images/twitter.svg";

const TeamList = async () => {

    const data = await getData()

  return (
    <div className='py-[60px]'>
        <div className='max-w-screen-xl mx-auto'>
        <SectionTitle title="Our Team Member" subtitle="Check our awesome team members"/>
        
            <div className="md:flex flex-wrap justify-between  mt-[60px]">

                {data.map((item, index)=> {
                    return(
                        <div className="rounded-xl overflow-hidden shadow mb-2 md:mb-0" key={index}>
                            <div className="relative">
                                <Image src={item.image} alt="image" className="w-full object-cover" width={300} height={300}/>
                                <div className="flex items-center absolute bottom-[30px] left-[50%] translate-x-[-50%] bg-white rounded-full py-2 px-6">
                                    <span className="w-6 h-6 flex justify-center items-center"> <Image src={fIcon} alt="icon"/> </span>
                                    <span className="w-6 h-6 flex justify-center items-center"> <Image src={tIcon} alt="icon"/> </span>
                                    <span className="w-6 h-6 flex justify-center items-center"> <Image src={iIcon} alt="icon"/> </span>    
                                </div>
                            </div>
                            
                            <h4 className="text-gray-900 text-center text-3xl font-semibold leading-6 py-[30px]"> {item.name} </h4> 
                        </div>
                    )
                })}



            </div>

        </div>
  </div>
  )
}

export default TeamList