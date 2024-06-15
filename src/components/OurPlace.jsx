import React from 'react'
import "./Crou.css";

const OurPlace = () => {
  return (
    <>        
    {/* <div className='relative left-[205px] top-[295px] z-10   h-10 w-5 bg-white'></div> */}
    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56 '>Our Placements</h1>
    <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5 mt-10 m-10 sm:mx-24 md:mx-32 lg:mx-56 '>
      <div className=' bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
  
          <h2 className='place '>Package : 5 LPA</h2>
          
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
