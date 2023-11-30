import BrandList from '@/components/BrandList'
import FeatureProject from '@/components/FeatureProject'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import StartList from '@/components/StartList'
import Subscribe from '@/components/Subscribe'
import WorkList from '@/components/WorkList'

import Image from 'next/image'

export default function Home() {
  return (
   <>

    <div className="bg-gradient-to-b from-green-100 to-green-100 pb-10">      
        <Navbar />    
        <HeroSection />
        <BrandList />
    </div>  

    <WorkList />
    <StartList />
    <FeatureProject />
    <Subscribe />
    

   </>
  )
}
