import React, { useEffect } from 'react'
import logo from "../assets/ozonsoft-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurHiring = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <>
    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-32 m-4 sm:mx-24 md:mx-32 lg:mx-56'>Our Hiring Partners</h1>
    <div className='flex flex-wrap justify-center items-center gap-5 mt-10 m-4 '>

      <div data-aos="zoom-in" className='flex justify-center items-center rounded shadow-2xl w-72 h-44'>
      <img  className=' p-2 ' src={logo} alt="" />
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center rounded shadow-2xl w-72 h-44'>
      <img  className=' p-2 ' src={logo} alt="" />
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center rounded shadow-2xl w-72 h-44'>
      <img  className=' p-2 ' src={logo} alt="" />
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center rounded shadow-2xl w-72 h-44'>
      <img  className=' p-2 ' src={logo} alt="" />
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center rounded shadow-2xl w-72 h-44'>
      <img  className=' p-2 ' src={logo} alt="" />
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center rounded shadow-2xl w-72 h-44'>
      <img  className=' p-2 ' src={logo} alt="" />
      </div>
     

    </div>
    </>
  )
}

export default OurHiring
