import React, { useEffect } from 'react'
import aboutBan from "../assets/aboutFirst.webp"
import sup from "../assets/sup.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const AboutBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundImage: `url(${aboutBan})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className='h-56 lg:h-[450px] md:h-[300px] sm:h-[300px] flex justify-between items-start ' >
      <div className='p-10 flex flex-col gap-3'>
      <h1 className='md:text-6xl sm:text-4xl text-2xl text-white font-bold'>100% Support </h1>
      <h2 className='md:text-6xl sm:text-4xl text-2xl text-white font-bold'>Assistance Support</h2>
      <h2 className='md:text-4xl sm:text-3xl text-xl text-red-400 font-bold'>Powered by Shanti Infosoft LLP</h2>
      </div>

      <div data-aos="zoom-in" className='hidden sm:block '>
        <img src={sup} alt="" className='' />
      </div>
        
    </div>
  )
}

export default AboutBanner
