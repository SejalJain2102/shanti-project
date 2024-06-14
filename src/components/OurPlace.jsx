import React from 'react'

const OurPlace = () => {
  return (
    <>        
    {/* <div className='relative left-[205px] top-[295px] z-10   h-10 w-5 bg-white'></div> */}
    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-1 sm:mx-22 md:mx-24 lg:mx-56 '>Our Placements</h1>
    <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5 mt-10 m-10 sm:mx-22 md:mx-24 lg:mx-56 '>
      <div className=' bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
  
          {/* <h2 className='font-bold  text-md px-2 py-1.2 bg-[#EE4F50] text-white relative -left-10  overflow-hidden w-[200px] text-center font-mono transition-transform -rotate-45'>Package : 5 LPA</h2> */}
          
        <div className='flex flex-col justify-between items-center gap-3'>
        <img src="../src/assets/AjeetSaroj.png" alt="ajeet" />
        <h1 className='font-bold text-2xl'>Ajeet Saroj</h1>
        <p className='text-lg font-extralight '>Full Stack (MERN) developer </p>
        <img src="../src/assets/ozonsoft-logo.png" alt="ozoneSoft" />
        </div>
      </div>

      <div className='flex flex-col justify-between items-center gap-3 bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
        <img src="../src/assets/RaghavMaheshwari.png" alt="ajeet" />
        <h1 className='font-bold text-2xl'>Raghav Maheshwari</h1>
        <p className='text-lg font-extralight '>Full Stack (MERN) developer </p>
        <img src="../src/assets/bytebillion-logo.png" alt="ozoneSoft" />
      </div>

      <div className='flex flex-col justify-between items-center gap-3 bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
        <img src="../src/assets/PoojaVishwakarma.png" alt="ajeet" />
        <h1 className='font-bold text-2xl'>Pooja Vishwakarma</h1>
        <p className='text-lg font-extralight '>Full Stack (MERN) developer </p>
        <img src="../src/assets/ozonsoft-logo.png" alt="ozoneSoft" />
      </div>
    </div>
    </>
  )
}

export default OurPlace
