import Breadcrumb from '@/components/Breadcrumb';
import Navbar from '@/components/Navbar'  


export async function generateMetadata(){
    const response = await fetch(process.env.BASE_URL+"api/SiteMeta/services");
    const jsonData = await response.json();
  
    return{
        title : jsonData[0]['title'],
        description : jsonData[0]['description'],
        keywords : jsonData[0]['keywords'],
        openGraph: {
            images: jsonData[0]['image'],
        },
    }
}


const Layout = ({children}) => {
    return (
        <>
            <div className='bg-[#cccccc30] pb-[50px]'>
                <Navbar/>
                <Breadcrumb name="Our Services" />
            </div>

            {children}
        </>
    );
};

export default Layout;