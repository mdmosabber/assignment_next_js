async function getData(){
    const response = await fetch(process.env.BASE_URL+'api/BrandList');
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    return response.json();
}

const BrandList = async() => {
    const data = await getData();
  return (
    <div className='bg-white py-[30px]'>
        <div className='max-w-screen-xl mx-auto'>
            <div className='md:flex justify-between'>
                {
                    data.map((item, index) => {
                        return(                                                         
                            <div key={index} className="mb-12 lg:mb-0">                                
                                <img className="mx-auto h-8" src={item['image']} alt=""/>                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BrandList