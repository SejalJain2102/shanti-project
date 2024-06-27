import React, { useEffect } from 'react'
import aboutBan from "../assets/aboutBgBanner.jpg"
import sup from "../assets/aboutCircle.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const AboutBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundImage: `url(${aboutBan})`,
     backgroundSize: "cover", 
     backgroundRepeat: "no-repeat", 
     backgroundRepeat: "no-repeat", 
     backgroundPosition: "center", 
     backgroundColor: ""}} className='h-56 lg:h-[450px] md:h-[300px] sm:h-[300px] flex justify-between items-end ' >
      <div className='p-10 flex flex-col gap-3'
      style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        width: "100%", 
        height: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "end", 
        alignItems: "start",
        padding:"6%"}}>
      <h1 className='md:text-6xl sm:text-4xl text-2xl text-white font-bold  '>100% Support </h1>
      <h2 className='md:text-6xl sm:text-4xl text-2xl text-white font-bold '>Assistance Support</h2>
      <h2 className='md:text-4xl sm:text-3xl text-xl text-white font-bold '>Powered by Shanti Infosoft LLP</h2>
      </div>

      {/* <div data-aos="zoom-in" className='hidden sm:block  pr-10 '>
        <img src={sup} alt="" className='w-96 h-96 object-cover rounded-full shadow-2xl' />
      </div> */}
        
    </div>
  )
}

export default AboutBanner
