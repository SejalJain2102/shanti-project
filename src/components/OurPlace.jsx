import React, { useEffect } from 'react'
import "./Crou.css";
import { useLocation } from 'react-router-dom';

const OurPlace = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>        
    {/* <div className='relative left-[205px] top-[295px] z-10   h-10 w-5 bg-white'></div> */}
    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56 '>Our Placements</h1>
    <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5 mt-10 m-10 sm:mx-24 md:mx-32 lg:mx-56 '>

      <div className='z-20 bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
          <h2 style={{backgroundImage:"url('../src/assets/pack.png')", backgroundSize: "cover", backgroundRepeat:"no-repeat",
    }} className='place h-7 w-52 transition-transform -rotate-45 relative -left-14 -top-3 flex justify-center items-center font-bold text-white p-1'>Package : 5 LPA</h2>
        <div className='flex flex-col justify-between items-center gap-3'>
        <img src="../src/assets/AjeetSaroj.png" alt="ajeet" />
        <h1 className='font-bold text-2xl'>Ajeet Saroj</h1>
        <p className='text-lg font-extralight '>Full Stack (MERN) developer </p>
        <img src="../src/assets/ozonsoft-logo.png" alt="ozoneSoft" />
        </div>
      </div>

      <div className='z-10 bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
          <h2 style={{backgroundImage:"url('../src/assets/pack.png')", backgroundSize: "cover", backgroundRepeat:"no-repeat",
    }} className='place h-7 w-52 transition-transform -rotate-45 relative -left-14 -top-3 flex justify-center items-center font-bold text-white p-1'>Package: .. LPA</h2>
        <div className='flex flex-col justify-between items-center gap-3'>
        <img src="../src/assets/RaghavMaheshwari.png" alt="Raghav" />
        <h1 className='font-bold text-2xl'>Raghav Maheshwari</h1>
        <p className='text-lg font-extralight '>Full Stack (MERN) developer </p>
        <img src="../src/assets/bytebillion-logo.png" alt="ozoneSoft" />
      </div>
      </div>

      <div className=' bg-[#FDECEA] py-12 border-b-8 border-red-500  rounded-lg'>
          <h2 style={{backgroundImage:"url('../src/assets/pack.png')", backgroundSize: "cover", backgroundRepeat:"no-repeat",
    }} className='place h-7 w-52 transition-transform -rotate-45 relative -left-14 -top-3 flex justify-center items-center font-bold text-white p-1'>Package : 5 LPA</h2>
        <div className='flex flex-col justify-between items-center gap-3'>
        <img src="../src/assets/PoojaVishwakarma.png" alt="pooja" />
        <h1 className='font-bold text-2xl'>Pooja Vishwakarma</h1>
        <p className='text-lg font-extralight '>Full Stack (MERN) developer </p>
        <img src="../src/assets/ozonsoft-logo.png" alt="ozoneSoft" />
      </div>
      </div>
    </div>
    </>
  )
}

export default OurPlace
